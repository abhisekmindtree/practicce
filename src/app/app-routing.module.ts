import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './moduels/login/login.component';
import { WorklistComponent } from './moduels/worklist/worklist.component';
import { RoutingInfo } from './shared/models/routing-info';
import { AuthGuard } from './core/guards/auth-guard';
import { ProductSelectionComponent } from './moduels/products/product-selection/product-selection.component';
import { NewBusinessComponent } from './moduels/products/prodcuts_modules/starr_sci/sci-new-buss/new-business/new-business.component';



const routes: Routes = [
  { path: RoutingInfo.DEFAULT_ROUTE_URL, redirectTo: RoutingInfo.LOGIN_ROUTE_URL, pathMatch: 'full' },
  { path: RoutingInfo.LOGIN_ROUTE_URL, component: LoginComponent } ,
  { path: RoutingInfo.USER_WORKLIST_ROUTE_URL, component: WorklistComponent, canActivate: [AuthGuard]} ,
  { path: RoutingInfo.NEW_BUSINESS_PRODUCT_SELECTION, component: ProductSelectionComponent, canActivate: [AuthGuard]},
  //{ path: RoutingInfo.NEW_BUSINESS_ROUTE_URL, component: NewBusinessComponent, canActivate: [AuthGuard]},
  {path:'sci-new-buss', loadChildren: "./moduels/products/prodcuts_modules/starr_sci/sci-new-buss/sci-new-buss.module#SciNewBussModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
