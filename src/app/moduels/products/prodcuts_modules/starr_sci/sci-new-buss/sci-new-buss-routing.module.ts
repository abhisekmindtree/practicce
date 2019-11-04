import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingInfo } from 'src/app/shared/models/routing-info';
import { ProducerComponent } from './producer/producer.component';
import { NewBusinessComponent } from './new-business/new-business.component';
import { AuthGuard } from 'src/app/core/guards/auth-guard';
import { ClientComponent } from './client/client.component';



const routes: Routes = [  
  { path: RoutingInfo.NB_PRODUCER_ROUTER_URL, component: ProducerComponent , canActivate: [AuthGuard]} ,
  { path: "", component: ProducerComponent, canActivate: [AuthGuard]},
  { path: RoutingInfo.NB_CLIENT_ROUTER_URL, component: ClientComponent, canActivate: [AuthGuard]},
];

@NgModule({  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SciNewBussRoutingModule { }
