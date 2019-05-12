import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { VacationPlannerComponent } from './vacation-planner/vacation-planner.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { TimesheetDetailComponent } from './timesheet-detail/timesheet-detail.component';
import { ClientsDetailComponent } from './clients-detail/clients-detail.component';
import { OrdersDetailComponent } from './orders-detail/orders-detail.component';
const routes: Routes = [
 { path: '', component: AdminComponent,
 	 children: [
      { path: 'home', component: AdminHomeComponent },
      { path: 'user', component: UserComponent },
      { path: 'createuser', component: CreateUserComponent},
      { path: 'userdetail/:id', component: UserDetailComponent},
      { path: 'project', component: ProjectDetailComponent },
      { path: 'task', component: TaskDetailComponent },
 	 	  { path: 'vacation', component: VacationPlannerComponent },
      { path: 'timesheet', component: TimesheetDetailComponent },
      { path: 'client', component: ClientsDetailComponent },
      { path: 'order', component: OrdersDetailComponent }
   

 	 ]
 }
];

@NgModule({
declarations: [
    AdminComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    CreateUserComponent,
    ProjectDetailComponent,
    TaskDetailComponent,
    VacationPlannerComponent,
    AdminHomeComponent,
    UserComponent,
    UserDetailComponent,
    TimesheetDetailComponent,
    ClientsDetailComponent,
    OrdersDetailComponent,


    
  ],
  imports: [ FormsModule,DataTablesModule,HttpClientModule,CommonModule,RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})


export class AdminModule { }
