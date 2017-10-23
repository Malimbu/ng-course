import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalRoutingModule } from './modal-routing.module';
import { ModalComponent } from './modal.component';

@NgModule({
  imports: [
    CommonModule,
    ModalRoutingModule
  ],
  declarations: [ModalComponent]
})
export class ModalModule { }
