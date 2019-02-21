import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog,MatDialogConfig} from '@angular/material';
import { RequestAddDialogComponent } from '../request-add-dialog/request-add-dialog.component';


@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})

export class ClinicComponent implements OnInit {

  clinics:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router,
    private dialog:MatDialog) { }

  ngOnInit() {
    this.getClinics();
    
  }
  
  getClinics() {
    this.clinics = [];
    this.rest.getClinics().subscribe((data: {}) => {
      console.log(data);
      this.clinics = data;
    });
  }

  openDialog(name:string,id:number): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      nameclinic:name,
      id:id,
    
    }
    dialogConfig.panelClass='mypanel'
    const dialogRef = this.dialog.open(RequestAddDialogComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
}
}
