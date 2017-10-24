import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ReactiveFormComponent } from './reactive-form.component';
import { DataCustomerComponent } from './data-customer/data-customer.component';
import { ValidationCustomerComponent } from './validation-customer/validation-customer.component';

const routes: Routes = [
  { path: 'reactive-form', 
    component: ReactiveFormComponent,
    children: [
      {path: 'customer', component: CustomerComponent },
      {path: '', redirectTo: '/reactive-form/customer', pathMatch: 'full' },
      {path: 'validation-customer', component: ValidationCustomerComponent },
      {path: 'data-customer', component: DataCustomerComponent }      
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormRoutingModule { }
