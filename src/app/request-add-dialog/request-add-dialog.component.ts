import { Component, OnInit ,Inject, ElementRef, Input} from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogConfig,MatInputModule,MatDatepicker,MatNativeDateModule, _MatInputMixinBase} from '@angular/material';
import { Identifiers } from '@angular/compiler';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-request-add-dialog',
  templateUrl: './request-add-dialog.component.html',
  styleUrls: ['./request-add-dialog.component.css']
})



export class RequestAddDialogComponent implements OnInit {
  full_name:string ;
  email:string;
  mobile_number:number;
  appointment_date:Date;
  clinic_id:number;
  
  titile:string
  private id :number;
  date :Date;
  addrequestdata:any;
  
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router,
    @Inject(MAT_DIALOG_DATA)data
  ) { 
      this.titile=data.nameclinic;
      this.id=data.id;
      this.addrequestdata={
        full_name:this.full_name,
        email:this.email,
        mobile_number:this.mobile_number,
        appointment_date:this.appointment_date,
        clinic_id:this.id
        
      }
      
  }
  
  ngOnInit() {
  }
  
 
  addRequest() {

   
    
    this.rest.addRequest(this.addrequestdata).subscribe((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }
  _openCalendar(picker: MatDatepicker<Date>) {
    picker.open();

    // use the setTimeout to push the focus capturing
    // into the event loop and put it off until the calendar 
    // routines finish. 
    // Otherwise the calendar will get the focus back
    //setTimeout(() => this.;
}

}
