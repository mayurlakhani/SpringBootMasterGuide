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
@Component({
  selector: 'app-timesheet-detail',
  templateUrl: './timesheet-detail.component.html',
  styleUrls: ['./timesheet-detail.component.scss']
})

export class TimesheetDetailComponent implements OnInit {

  constructor(private http: HttpClient, 
              private appService: AppService,private storage:LocalStorageService ) { }
dtOptions: DataTables.Settings = {};
  data = [];
  timesheets:any;
  profile:any;
  dtTrigger:Subject<any> = new Subject();

  ngOnInit() {
  this.profile = this.storage.retrieve('username');
  console.log("login by username",this.profile);
   console.log('timesheets are fetched');
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10
      };
       this.appService.getTimeSheet().subscribe(
          data => { this.timesheets = data; 
          this.dtTrigger.next();
         
      });

   
}

ngOnDestroy(){}

}
