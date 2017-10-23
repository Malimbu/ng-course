import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { ReactiveFormComponent } from './reactive-form.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,    
    ReactiveFormRoutingModule
  ],
  declarations: [ CustomerComponent, ReactiveFormComponent]
})
export class ReactiveFormModule { }
