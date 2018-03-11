import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { HttpModule } from '@angular/http';
import {DataTableModule} from 'primeng/datatable';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { BillingComponent } from './billing/billing.component';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    ProductdetailsComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path:'',component:ProductdetailsComponent},{path:'billpage',component:BillingComponent}]),
    InputTextModule,
    HttpModule,
    FormsModule,
    ButtonModule,
    DataTableModule,
    MenuModule,
    AutoCompleteModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
