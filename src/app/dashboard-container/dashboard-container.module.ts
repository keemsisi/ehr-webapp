import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { DashboardContainerRoutingModule } from './dashboard-container-routing.module';
import { DashboardContainerComponent } from './dashboard-container.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardContainerComponent
  ],
  imports: [
    CommonModule,
    DashboardContainerRoutingModule,
    ReactiveFormsModule,
    MatTableModule
  ]
})
export class DashboardContainerModule { }
