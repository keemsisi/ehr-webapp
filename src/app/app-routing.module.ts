import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard-container/dashboard-container.module').then(m => m.DashboardContainerModule) }, 
  { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, 
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, 
  { path: '**', loadChildren: () => import('./notfound/notfound.module').then(m => m.NotfoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
