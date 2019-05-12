import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TimesheetDetailComponent } from './timesheet-detail/timesheet-detail.component';
const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', component: DashboardHomeComponent},
      { path: 'timesheet', component: TimesheetComponent},
       { path: 'detail/:id', component: TimesheetDetailComponent },
      { path: 'clients', loadChildren: '../clients/clients.module#ClientsModule' },
      { path: 'orders', loadChildren: '../orders/orders.module#OrdersModule' },
    
      { path: 'forms', loadChildren: '../forms/forms.module#FormsLocalModule' }
      
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
