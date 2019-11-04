import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './moduels/login/login.component';
import { WorklistComponent } from './moduels/worklist/worklist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInteceptor } from './core/interceptors/http-inteceptors';
import { AuthGuard } from './core/guards/auth-guard';
import { HeaderComponent } from './shared/moduels/header/header.component';
import { FooterComponent } from './shared/moduels/footer/footer.component';
import { AgGridModule } from 'ag-grid-angular';
import { ProductSelectionComponent } from './moduels/products/product-selection/product-selection.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WorklistComponent,
    HeaderComponent,
    FooterComponent,
    ProductSelectionComponent
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInteceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
