import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent } from '../dashboard-container/dashboard-container.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardContainerComponent },
  { path: 'patientslist', loadChildren: () => import('../patientslist/patientslist.module').then(m => m.PatientslistModule) },
  { path: 'register', loadChildren: () => import('../register/register.module').then(m => m.RegisterModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
