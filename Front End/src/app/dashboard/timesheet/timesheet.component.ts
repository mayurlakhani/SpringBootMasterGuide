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

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})


export class TimesheetComponent implements OnInit {

private baseUrl = 'http://localhost:8081';
tasks:any;
data = [];
activity=[];
timesheet:TimeSheet= new TimeSheet();
projects:any;
activities:any;
submitted = false;
selectItems = ['Comment', 'Notice', 'Caution!'];

  constructor(private http: HttpClient, 
              private appService: AppService,private storage:LocalStorageService,public toastr: ToastrManager) { }
 
 showSuccess() {
        this.toastr.successToastr('Successfully completed.', 'Success!');
    }

    showError() {
        this.toastr.errorToastr('Error occoured.', 'Oops!');
    }

    showWarning() {
        this.toastr.warningToastr('This is warning toast.', 'Alert!');
    }

    showInfo() {
        this.toastr.infoToastr('This is info toast.', 'Info');
    }

    showCustom() {
        this.toastr.customToastr('Timesheet process is closed ', null, { enableHTML: true });
    }

    showToast(position: any = 'top-left') {
        this.toastr.infoToastr('This is a toast.', 'Toast', { position: position });
    }

  ngOnInit() {  


  function append(dl, dtTxt, ddTxt) {
  var dt = document.createElement("dt");
  var dd = document.createElement("dd");
  dt.textContent = dtTxt;
  dd.textContent = ddTxt;
  dl.appendChild(dt);
  dl.appendChild(dd);


         
}

// *****for TimeTracking tool*****

$(document).ready(function() {
   
   var datepicker = new ej.calendars.DatePicker({ width: "255px" });
        datepicker.appendTo('#datepicker');

  var datepicker1 = new ej.calendars.DatePicker({ width: "255px" });
        datepicker1.appendTo('#datepicker1');


  var today = new Date();
  $('#startDate').val(today.getFullYear() + "-" + ('0' + (today.getMonth() + 1)).slice(-2) + "-" + ('0' + (today.getDate() )).slice(-2));
  $('#endDate').val($('#startDate').val());
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  $('#startTime').val(time);
  $('#endTime').val(time);
  

  $('#startDate, #endDate, #startTime, #endTime').on('change', function(ev) {


    var dl = document.getElementById("diff");
    while (dl.hasChildNodes()) {
      dl.removeChild(dl.lastChild);
    }


    var date1 = new Date($('#startDate').val() + " " + $('#startTime').val()).getTime();
    var date2 = new Date($('#endDate').val() + " " + $('#endTime').val()).getTime();

    var inter = document.getElementById("duration");
    inter.value = $('#startDate').val()+""+$('#startTime').val()+" to "+ $('#endDate').val()+""+$('#endTime').val();
    append(dl, "Interval ", " from: " + $('#startDate').val() + " " + $('#startTime').val() + " to: " + $('#endDate').val() + " " + $('#endTime').val());
    var msec = date2 - date1;
    var mins = Math.floor(msec / 60000);
    var hrs = Math.floor(mins / 60);
    var days = Math.floor(hrs / 24);
    var yrs = Math.floor(days / 365);


    var minutes =document.getElementById("minutes");
    minutes.value = mins;
    append(dl, "In minutes: ", mins + " minutes");
   
    mins = mins % 60;
    var x = document.getElementById("hours");
    x.value=hrs;
    append(dl, "In hours: ", hrs + " hours, " + mins + " minutes");
    hrs = hrs % 24;
   
    var day= document.getElementById("days");
    day.value = days;
    append(dl, "In days: ", days + " days, " + hrs + " hours, " + mins + " minutes");
   
    //days=days%365;  
    //append(dl,"In years: ",yrs + " years " + days + " days ");
  });



});

  this.getProjectName();
  this.getActivity();

 // ********get processDefinationKey from TaskDefinationKey

 var taskDefinitionKey='Task_110cvo9';
   
   return this.appService.getHeroNo(taskDefinitionKey).subscribe(tasks => {
          this.tasks=tasks;
          console.log('taskdetails',tasks);
          //this.appService.SaveTaskByDefKeyDetail(tasks); //****save to db
         
    },
    error => console.log(error));  

} //end Init

  getActivity(): void {
     this.http.get(`${this.baseUrl}/activity`).subscribe(activity => 
      { this.activity = activity;
      console.log("activity", activity);
      for(let x of activity)
      console.log("name",x.name);});
  }

  

  getProjectName(): void {

    this.http.get(`${this.baseUrl}/project`).subscribe(data => 
      { this.data=data;
      console.log("data",data);
      for(let x of data)
      console.log("name",x.project_name);});
  }

  createTimeSheet(){
  var h= document.getElementById("hours").value;
  var m= document.getElementById("minutes").value;
  var d= document.getElementById("days").value;
  var i= document.getElementById("duration").value;
  var id= document.getElementById("taskId").value;
   
    this.timesheet.hours=h;
    this.timesheet.minutes=m;
    this.timesheet.days=d;
    this.timesheet.duration=i;
    this.timesheet.id=id;
    this.timesheet.profile=this.storage.retrieve('username');
    console.log("TimeSheet",this.timesheet);
    const obj = JSON.stringify(this.timesheet);
     this.http.post(`http://localhost:8081/save/timesheetform`,obj, httpOptions).subscribe(data=>{console.log("method",this.timesheet);});
      this.appService.createTimeSheet(this.timesheet,this.timesheet.id).subscribe(
            data => {
            alert("save");
            console.log("inside",this.timesheet);
            this.timesheet= new TimeSheet(); 
      });  
    this.showSuccess();
  }

cancelTimesheet(){

  this.appService.createTimeSheet(this.timesheet,this.timesheet.id).subscribe(
            data => {
         
            this.timesheet= new TimeSheet(); 
            this.showCustom();
      }); 
  


}
   onSubmit() {
   this.submitted = true;
    this.createTimeSheet();
  }

}
