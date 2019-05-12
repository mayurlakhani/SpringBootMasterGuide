import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataTablesModule } from 'angular-datatables';
import { CreateClientComponent } from './create-client/create-client.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
const routes: Routes = [
  { path: '', component:ClientsComponent},
   { path: 'createclient', component:CreateClientComponent},
   { path: 'detail/:id', component:ClientDetailComponent}
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    DataTablesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClientsComponent, CreateClientComponent, ClientDetailComponent]
})
export class ClientsModule { }
