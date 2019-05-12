import { Component, OnDestroy,OnInit} from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { AppService } from '../app.service';
import {Response} from '@angular/http';
import {Client} from '../client';
import * as $ from 'jquery';
import {LocalStorageService} from 'ngx-webstorage';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  data = [];
  clients: Client[];
  tasks:any;
  profile:any;
  output:JSON;
  obj:any= {"variables":
                {"task": 
                  {"value": "Clients"}
                }
            };
  dtTrigger:Subject<any> = new Subject();


  constructor(private http: HttpClient, 
              private appService: AppService, private store:LocalStorageService, public toastr: ToastrManager) { }
   
   showSuccess() {
        this.toastr.successToastr('Successfully started.', 'Success!');
    }

    showError() {
        this.toastr.errorToastr('Error occoured.', 'Oops!');
    }

     showInfo() {
        this.toastr.infoToastr('create client process Starting....', 'Info');
    }

    showToast(position: any = 'top-right') {
        this.toastr.infoToastr('Process is running.', 'Toast', { position: position });
    }

  ngOnInit() {

  this.profile = this.store.retrieve('username');
  console.log("login by username",this.profile);
   console.log('clients are fetched');
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5
      };
       this.appService.getListClient(this.profile).subscribe(
          data => { this.clients = data; 
          console.log('clients fetched',this.clients);
          this.dtTrigger.next();
         
      });
  }

//to start the whole process
 timesheet:any | {};
  startProcess(){
  this.showInfo();
  this.appService.startProcess(this.timesheet).subscribe(data =>this.data);
  }

//to choose the task
  getClientTask(){
  
  this.startProcess();

  var taskDefinitionKey='Task_0zfji4j';
   
  return this.appService.getClientTask(taskDefinitionKey).subscribe(tasks => {
          
          for (let task of tasks) 
          this.output = <JSON>this.obj;
        return this.appService.pickUpTaskClient(this.output,task.id).subscribe(
            data => { console.log("this.output",this.output);
              this.showSuccess();      
      });  
               
    }, 
    error => console.log(error));
    
   //****** pick up decision
     
}

  deleteClient(client:Client):void{
    this.profile = this.store.retrieve('username');
    this.clients = this.clients.filter(h => h !== client);
    this.appService.deleteClient(client).subscribe(client=>{this.clients=client;
    this.appService.getListClient(this.profile);

    });
 }

  ngOnDestroy(){}

}
