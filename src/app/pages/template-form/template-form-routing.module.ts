import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateFormComponent } from './template-form.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path: 'template-form',
    component: TemplateFormComponent,
    children: [
      {path: 'customer', component: CustomerComponent },
      {path: '', redirectTo: '/template-form/customer', pathMatch: 'full' },
        
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateFormRoutingModule { }
