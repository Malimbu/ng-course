import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: []
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer: Customer = new Customer();

  constructor() { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      firstName: new FormControl('', Validators.required ),
      lastName: new FormControl('', Validators.minLength(4)),
      email: new FormControl(),
      sendCatalog: new FormControl(true)
    });
  }

  onSubmit(){
    console.log(this.customerForm);
  }

}
