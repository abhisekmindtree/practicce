import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RoutingInfo } from '../../models/routing-info';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loginHeaderType: boolean = false;
  loggedinUserName: string;
  templateName : string;
  constructor(private router: Router,
    private authservice: AuthService) { }

  ngOnInit() {   
    if (this.authservice.isUserLoggedIn()) {
      this.loggedinUserName = this.authservice.currentLoggedinUser;
      this.loginHeaderType = false;
    } else {
      this.loginHeaderType = true;
    }
    console.log(this.router.url);
    if(this.router.url === "/" + RoutingInfo.USER_WORKLIST_ROUTE_URL) {
      this.templateName = "UserHome";
    } else if(this.router.url === "/" + RoutingInfo.NEW_BUSINESS_ROUTE_URL) {
      this.templateName = "NewBusiness";
    }
    this.templateName = "UserHome";
  }

  logoutUser() {
    this.authservice.logout();
    Swal.fire('Logged out', 'successfully', 'success');    
    this.router.navigate(['/login']);
  }

  navigate(routerUrl: string) {
    this.router.navigateByUrl(routerUrl);
  }

}
