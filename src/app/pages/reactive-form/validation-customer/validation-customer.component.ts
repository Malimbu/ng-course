import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Customer } from '../customer';

@Component({
  selector: 'app-validation-customer',
  templateUrl: './validation-customer.component.html',
  styles: []
})
export class ValidationCustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer: Customer = new Customer();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required, Validators.minLength(3)  ]]
      // lastName: ['', Validators.minLength(3) ],
      
      // lastName: ['', [ Validators.minLength(3)  ]]
      // email: ['', Validators.required, Validators.email],
      // sendCatalog: true
    })

  }

  get getLastName(){
    return this.customerForm.get('lastName') ;
  }

  onSubmit(){
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  testData(){
    this.customerForm.patchValue({
      firstName: 'Gafur',
      lastName: 'Jamada',
      // email: 'mgafur@gmail.com',
      // sendCatalog: false
    })
  }

}
