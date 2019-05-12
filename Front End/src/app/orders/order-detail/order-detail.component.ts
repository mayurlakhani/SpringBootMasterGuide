import { Component, OnDestroy, OnInit,Input} from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { AppService } from '../../app.service';
import {Response} from '@angular/http';
import {Client} from '../../client';
import {Order} from '../../order';
import { Location } from '@angular/common';
import * as $ from 'jquery';
import {LocalStorageService} from 'ngx-webstorage';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
clients:any;
profile:any;
data=[];
@Input() order:Order;
  constructor(private http: HttpClient,private route: ActivatedRoute, private location: Location, 
              private appService: AppService, private store:LocalStorageService, public toastr: ToastrManager) { }

  ngOnInit() {
  this.profile = this.store.retrieve('username');
     this.appService.getListClient(this.profile).subscribe(
          clients => { this.clients=clients;
          console.log('clients fetched',this.clients);
         
         
      });
      this.getSingleOrder();
  }

  getSingleOrder(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.appService.getSingleOrder(id)
      .subscribe(order => {
      this.order = order;
      console.log("order",this.order);
       
      });
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
  const id = +this.route.snapshot.paramMap.get('id');
    this.appService.updateOrder(this.order,id)
      .subscribe(() => this.goBack());
  }

}
