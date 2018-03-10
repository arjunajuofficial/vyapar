import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { HttpModule } from '@angular/http';
//import { BillingComponent } from './billing/billing.component';
import {DataTableModule} from 'primeng/datatable';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductdetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path:'',component:ProductdetailsComponent}]),
    InputTextModule,
    HttpModule,
    FormsModule,
    ButtonModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
