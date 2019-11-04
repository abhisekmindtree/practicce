import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SciNewBussRoutingModule } from './sci-new-buss-routing.module';
import { NewBusinessComponent } from './new-business/new-business.component';
import { ClientComponent } from './client/client.component';
import { ProducerComponent } from './producer/producer.component';


@NgModule({
  declarations: [
    NewBusinessComponent,
    ProducerComponent,
    ClientComponent
  ],
  imports: [
    CommonModule,
    SciNewBussRoutingModule    
  ]
})
export class SciNewBussModule { }
