import { Component, OnInit,OnDestroy} from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import {Response} from '@angular/http';
import {TimeSheet} from '../timesheet';
import { AppService } from '../../app.service';
import * as $ from 'jquery';
import {LocalStorageService} from 'ngx-webstorage';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})

export class DashboardHomeComponent implements OnInit,OnDestroy {

constructor(private http: HttpClient, 
            private appService: AppService,private storage:LocalStorageService,public toastr: ToastrManager) { }

dtOptions: DataTables.Settings = {};
  data = [];
  timesheets:any;
  tasks:any;
  profile:any;
  dtTrigger:Subject<any> = new Subject();
  output:JSON;
  obj:any= {"variables":
                {"task": 
                  {"value": "TimeSheet"}
                }
            };

    showSuccess() {
        this.toastr.successToastr('Successfully started.', 'Success!');
    }

    showError() {
        this.toastr.errorToastr('Error occoured.', 'Oops!');
    }

     showInfo() {
        this.toastr.infoToastr('TimeSheet process Starting....', 'Info');
    }

    showToast(position: any = 'top-right') {
        this.toastr.infoToastr('Process is running.', 'Toast', { position: position });
    }

  ngOnInit() {
  this.profile = this.storage.retrieve('username');
  console.log("login by username",this.profile);
   console.log('timesheets are fetched');
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10
      };
      this.appService.getListTimeSheet(this.profile).subscribe(
          data => { this.timesheets = data; 
          this.dtTrigger.next();
         
      });
      // this.appService.getTimeSheet().subscribe(
         // data => { this.timesheets = data; 
         // this.dtTrigger.next();
         
     // });

   
}

ngOnDestroy(){}

 deleteTimeSheet(timesheet:TimeSheet):void{
    this.profile = this.store.retrieve('username');
    this.timesheets = this.timesheets.filter(h => h !== timesheet);
    this.appService.deleteTimeSheet(timesheet).subscribe(timesheet=>{this.timesheets=timesheet;
    this.appService.getListClient(this.profile);

    });
 }

//to start the whole process
 timesheet:any|{};
  startProcess(){
  this.appService.startProcess(this.timesheet).subscribe(data =>this.data);
   this.showInfo();
  }

//to choose timesheet task
getTimeSheetTask(){
  
  this.startProcess();
 var taskDefinitionKey='Task_0zfji4j';
   
   return this.appService.getTimeSheetTask(taskDefinitionKey).subscribe(tasks => {
          this.tasks=tasks;
          for (let task of tasks) 
          this.output = <JSON>this.obj;
        return this.appService.pickUpTask(this.output,task.id).subscribe(
            data => { console.log("this.output",this.output+task.id);
         
          
      });            
         
    },
    error => console.log(error));
     this.showToast();
   //****** pick up decision
     
}

  
   

}
