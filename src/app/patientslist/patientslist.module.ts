import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientslistRoutingModule } from './patientslist-routing.module';
import { PatientslistComponent } from './patientslist.component';


@NgModule({
  declarations: [
    PatientslistComponent
  ],
  imports: [
    CommonModule,
    PatientslistRoutingModule
  ]
})
export class PatientslistModule { }
