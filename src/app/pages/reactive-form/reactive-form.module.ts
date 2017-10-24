import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { ReactiveFormComponent } from './reactive-form.component';
import { ValidationCustomerComponent } from './validation-customer/validation-customer.component';
import { DataCustomerComponent } from './data-customer/data-customer.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,    
    ReactiveFormRoutingModule
  ],
  declarations: [ CustomerComponent, ReactiveFormComponent, ValidationCustomerComponent, DataCustomerComponent]
})
export class ReactiveFormModule { }
