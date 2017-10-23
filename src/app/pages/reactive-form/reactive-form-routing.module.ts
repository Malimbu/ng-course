import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ReactiveFormComponent } from './reactive-form.component';

const routes: Routes = [
  { path: 'reactive-form', 
    component: ReactiveFormComponent,
    children: [
      {path: 'customer', component: CustomerComponent },
      {path: '', redirectTo: '/reactive-form/customer', pathMatch: 'full' }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormRoutingModule { }
