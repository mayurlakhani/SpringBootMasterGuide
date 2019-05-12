import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataTablesModule } from 'angular-datatables';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
const routes: Routes = [
  { path: '', component:OrdersComponent},
  { path: 'createorder', component:CreateOrderComponent},
   { path: 'detail/:id', component:OrderDetailComponent}
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    DataTablesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrdersComponent, CreateOrderComponent, OrderDetailComponent]
})
export class OrdersModule { }
