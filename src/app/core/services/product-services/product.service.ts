import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResourceMappingInfo } from 'src/app/shared/models/resource-mapping-info';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  baseUrl = environment.baseUrl;
  constructor(private  httpClient:  HttpClient) { 

  }

  public createNewBusiness() {    
    const userName = localStorage.getItem("username");    
    return this.httpClient.post<any>(this.baseUrl + ResourceMappingInfo.CREATE_NEW_BLANK_POLICY, { userName })
      .pipe(
        map(
          userData => {           
            return userData;
          }          
        )
      );
  }
}
