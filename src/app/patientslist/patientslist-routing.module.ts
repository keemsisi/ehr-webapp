import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientslistComponent } from './patientslist.component';

const routes: Routes = [{ path: '', component: PatientslistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientslistRoutingModule { }
