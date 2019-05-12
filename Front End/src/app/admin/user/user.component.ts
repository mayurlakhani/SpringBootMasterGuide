import { Component, OnDestroy,OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { AppService } from '../../app.service';
import {Response} from '@angular/http';
import * as $ from 'jquery';
import {User} from '../user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnDestroy, OnInit {

 dtOptions: DataTables.Settings = {};
  data = [];
 
  users: User[];

  dtTrigger:Subject<any> = new Subject();
  constructor(private http: HttpClient, 
              private appService: AppService) { }
 
  ngOnInit() {

  this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5
      };
       this.appService.getUser().subscribe(
          data => { this.users = data; 
          console.log('users are fetched',this.users);  
          this.dtTrigger.next();
      });

  }

 deleteUser(user: User):void{
 alert("hi");
    this.users = this.users.filter(h => h !== user);
    this.appService.deleteUser(user).subscribe();
 }

  ngOnDestroy(){}



}
