import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceDashboardComponent } from './components/service-dashboard/service-dashboard.component';
import { ServiceFormComponent } from './components/service-form/service-form.component';

const routes: Routes = [
{path:'', redirectTo:'services', pathMatch:'full'},
{path:'services',component:ServiceDashboardComponent},
{path:'services/add',component:ServiceFormComponent},
{path:'services/:id',component:ServiceFormComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
