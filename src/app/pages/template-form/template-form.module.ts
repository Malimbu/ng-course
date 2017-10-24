import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateFormRoutingModule } from './template-form-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TemplateFormRoutingModule,
    FormsModule
  ],
  declarations: [CustomerComponent, TemplateFormComponent]
})
export class TemplateFormModule { }
