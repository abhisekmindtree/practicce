import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/authentication/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { LoginObject } from 'src/app/shared/models/login-object';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginObject : LoginObject = new LoginObject();
  languages : any = environment.languages;
  selectedCode : string = "";

  constructor(private router: Router, private authservice: AuthService) { }

  ngOnInit() {
  }

  login() {    
    //this.authservice.authenticateUserLogin(this.loginObject)

    this.authservice.authenticateUserLogin(this.loginObject)
    .subscribe(response => {

      if (response) {
        let accessToken = localStorage.getItem('token');
        let userName = this.authservice.currentLoggedinUser;          
        Swal.fire({
          type: 'success',
          title: 'Welcome '+ userName +' to Recon Policy Booking System.',
          showConfirmButton: false,
          timer: 2000
        })
        
        this.router.navigateByUrl('/user-worklist');
      }

    },error=>{
      Swal.fire({
        type: 'error',
        title: 'Invalid Credentials',
        text: 'Please check the User name and Password.',
      })

    });
  }

  displaySelectedLanaguage (localCode: string) {  
    const selectedLanaguage = localStorage.getItem("selectedLanaguage");  
    for (let index = 0; index < this.languages.length; index++) {
      const element = this.languages[index];
      if(element.code == localCode) {
        this.selectedCode = element.text;
        localStorage.setItem("selectedLanaguage", this.selectedCode);
        localStorage.setItem("selectedLanaguageCode", localCode);
      }
    }
    if(this.selectedCode == '' || this.selectedCode == undefined) {
      this.selectedCode = selectedLanaguage;
    }
  }

}
