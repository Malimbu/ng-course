import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: []
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer: Customer = new Customer();

  lastName = new FormControl('', Validators.minLength(4));

  constructor() { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      firstName: new FormControl('', Validators.required ),
      lastName: this.lastName ,
      email: new FormControl('', Validators.required),
      sendCatalog: new FormControl(true)
    });
  }

  onSubmit(){
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  testData(){
    this.customerForm.patchValue({
      firstName: 'Gafur',
      lastName: 'Jamada',
      email: 'mgafur@gmail.com',
      sendCatalog: false
    })
  }
}
