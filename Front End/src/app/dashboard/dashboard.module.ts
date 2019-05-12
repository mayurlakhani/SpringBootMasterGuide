import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { StatsComponent } from './stats/stats.component';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { TimesheetDetailComponent } from './timesheet-detail/timesheet-detail.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  
   
  ],providers: [
    

  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    DashboardHomeComponent,
    TasksComponent,
    StatsComponent,
    TimesheetComponent,
    TimesheetDetailComponent
  ]
})
export class DashboardModule { }
