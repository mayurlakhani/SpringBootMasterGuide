import { Component, OnInit,Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {TimeSheet} from './../timesheet';
import { DataTablesModule } from 'angular-datatables';
import { Observable, Subject, pipe } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import * as $ from 'jquery';
import {Task} from '../../task';
import {LocalStorageService} from 'ngx-webstorage';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};
@Component({
  selector: 'app-timesheet-detail',
  templateUrl: './timesheet-detail.component.html',
  styleUrls: ['./timesheet-detail.component.scss']
})
export class TimesheetDetailComponent implements OnInit {

@Input() timesheet: TimeSheet;
constructor( private route: ActivatedRoute,
			 private http: HttpClient,private location: Location,
              private appService: AppService,private storage:LocalStorageService,public toastr: ToastrManager) { }

  ngOnInit() {
  this.getTimesheetById();
  }

getTimesheetById():void{
	const id = +this.route.snapshot.paramMap.get('id');
	this.appService.getTimesheetById(id).subscribe(timesheet => this.timesheet = timesheet);
}

save(): void {
const id = +this.route.snapshot.paramMap.get('id');
    this.appService.updateTimesheet(this.timesheet,id)
      .subscribe(() => this.goBack());
  }
}
