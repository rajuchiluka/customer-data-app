import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './menus/components/dashboard/dashboard.component';
import { TaskDetailsComponent } from './menus/task-details/task-details.component';
import { ProductsComponent } from './menus/components/products/products.component';
import { CouriersComponent } from './menus/components/couriers/couriers.component';
import { SettingsComponent } from './menus/components/settings/settings.component';

const routes: Routes = [
  {
    path:'',redirectTo: '/dashboard' ,pathMatch: 'full' 
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'taskdetails',component:TaskDetailsComponent
  },
  {
    path:'products',component:ProductsComponent
  },
  {
    path:'couriers',component:CouriersComponent
  },
  {
    path:'settings',component:SettingsComponent
  },
  {
    path:'**',redirectTo: '/dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
