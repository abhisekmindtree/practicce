import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { LoginObject } from '../../shared/models/login-object';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../../shared/models/user-info';
import { environment } from 'src/environments/environment';
import { ResourceMappingInfo } from '../../shared/models/resource-mapping-info';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl: string;
  baseUrl = environment.baseUrl;
  
  private currentUserSubject: BehaviorSubject<UserInfo>;
  public currentUser: Observable<UserInfo>;
  
  
  constructor(private httpClient: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<UserInfo>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  authenticateUserLogin(loginObject : LoginObject) {
    let username = loginObject.userName;
    let password = loginObject.password;
    return this.httpClient.post<any>(this.baseUrl + ResourceMappingInfo.AUTHNTICATE_URL, { username, password })
      .pipe(
        map(
          userData => {
            let userInfo: UserInfo = new UserInfo();
            Object.assign(userInfo, userData.resource);
            let jwtToken = userData.jwttoken;
            localStorage.setItem("currentUser", JSON.stringify(userInfo));
            localStorage.setItem("jwt-token", jwtToken);
            localStorage.setItem("username", userInfo.userName);
            this.currentUserSubject.next(userInfo);
            return userData;
          }          
        )
      );
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    localStorage.removeItem('jwt-token');
    localStorage.removeItem('username');    
    localStorage.removeItem('selectedLanaguage');
    this.currentUserSubject.next(null);
  }

  isUserLoggedIn() {
    return !!localStorage.getItem('jwt-token');
  }

  get currentLoggedinUser() {
    let currentUser = localStorage.getItem('currentUser');
    let userInfo: UserInfo = new UserInfo();
    Object.assign(userInfo, JSON.parse(currentUser));
    if (!userInfo) {
      return null;
    }      
    return userInfo.firstName + " " + userInfo.lastName;
  }
}
