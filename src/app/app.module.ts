import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClinicComponent } from './clinic/clinic.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestAddDialogComponent } from './request-add-dialog/request-add-dialog.component';
import {MatInputModule,MatDatepickerModule,MatNativeDateModule} from '@angular/material';
const appRoutes: Routes = [
  {
    path: 'clinics',
    component: ClinicComponent,
    data: { title: 'Clinics list' }
  },
  { path: '',
    redirectTo: '/clinics',
    pathMatch: 'full'
  }
];


@NgModule({
  
  declarations: [
    AppComponent,
    HomeComponent,
    ClinicComponent,
    RequestAddDialogComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[RequestAddDialogComponent]
})
export class AppModule { }
