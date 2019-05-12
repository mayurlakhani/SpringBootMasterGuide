import { Component, OnDestroy,OnInit} from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { AppService } from '../app.service';
import {Response} from '@angular/http';
import { Order} from '../order';
import * as $ from 'jquery';
import {LocalStorageService} from 'ngx-webstorage';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnDestroy,OnInit {
dtOptions: DataTables.Settings = {};
  data = [];
  orders:Order[];
  profile:any;
  tasks:any;
  output:JSON;
  obj:any= {"variables":
                {"task": 
                  {"value": "Orders"}
                }
            };
  dtTrigger:Subject<any> = new Subject();

  constructor(private http: HttpClient, 
              private appService: AppService, private store:LocalStorageService, public toastr:ToastrManager) { }

 showSuccess() {
        this.toastr.successToastr('Successfully started.', 'Success!');
    }

    showError() {
        this.toastr.errorToastr('Error occoured.', 'Oops!');
    }

     showInfo() {
        this.toastr.infoToastr('create Order process Starting....', 'Info');
    }

    showToast(position: any = 'top-right') {
        this.toastr.infoToastr('Process is running.', 'Toast', { position: position });
    }
  ngOnInit() {
  this.profile = this.store.retrieve('username');
  console.log("login by username",this.profile);
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

//to start the whole process
 timesheet:any|{};
  startProcess(){
  this.appService.startProcess(this.timesheet).subscribe(data =>this.data);
  this.showInfo();
  }

//to choose timesheet task
getOrderTask(){
  
  this.startProcess();
 var taskDefinitionKey='Task_0zfji4j';
   
   return this.appService.getOrderTask(taskDefinitionKey).subscribe(tasks => {
          this.tasks=tasks;
          for (let task1 of tasks) 
          this.output = <JSON>this.obj;
        return this.appService.pickUpTaskOrder(this.output,task1.id).subscribe(
            data => { console.log("this.output",this.output);
                      this.showSuccess();
      });            
         
    },
    error => console.log(error));
   
   //****** pick up decision
     
}

  deleteOrder(order:Order):void{
    this.orders = this.orders.filter(h => h !== order);
    this.appService.deleteOrder(order).subscribe();
 }

}



