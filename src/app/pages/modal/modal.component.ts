import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
// import $ from 'jquery';
declare var $:any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  isLoading: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  closeModal(){
    this.isLoading=true;
    setTimeout(
      ress=> {
        this.isLoading=false;        
        $('#myModal').modal('hide');
      }, 2000
    );
  }

  openModal(){
    $('#myModal').modal('show');    
    this.isLoading=true;
    setTimeout(
      success => {
        this.isLoading=false;
      },2000
    );
  }

}
