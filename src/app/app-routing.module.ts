import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDataComponent } from './customer-data/customer-data.component';

const routes: Routes = [
  {
    path:'',redirectTo: '/customerDetails' ,pathMatch: 'full' 
  },
  {
    path:'customerDetails',component:CustomerDataComponent
  },
  {
    path:'**',redirectTo: '/customerDetails'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
