import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientslistRoutingModule } from './patientslist-routing.module';
import { PatientslistComponent } from './patientslist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    PatientslistComponent
  ],
  imports: [
    CommonModule,
    PatientslistRoutingModule,
    ReactiveFormsModule,
    MatTableModule
  ]
})
export class PatientslistModule { }
