import { Component, OnDestroy,OnInit} from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { AppService } from '../../app.service';
import {Response} from '@angular/http';
import { Order} from '../order';
import * as $ from 'jquery';

@Component({
  selector: 'app-orders-detail',
  templateUrl: './orders-detail.component.html',
  styleUrls: ['./orders-detail.component.scss']
})
export class OrdersDetailComponent implements OnDestroy,OnInit {

  dtOptions: DataTables.Settings = {};
  data = [];
  orders:Order[];
  dtTrigger:Subject<any> = new Subject();
  constructor(private http: HttpClient, 
              private appService: AppService) { }
   
  public restaurants;

  ngOnInit() {

   console.log('Orders are fetched');
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 3
      };
       this.appService.getOrders().subscribe(
          data => { this.orders = data; 
          this.dtTrigger.next();
      });

  }
  ngOnDestroy(): void{}
}
