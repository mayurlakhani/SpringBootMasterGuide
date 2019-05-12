import { Component, OnInit } from '@angular/core';
import { Component, OnDestroy,OnInit} from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { AppService } from '../../app.service';
import {Response} from '@angular/http';
import {Client} from '../client';
import * as $ from 'jquery';

@Component({
  selector: 'app-clients-detail',
  templateUrl: './clients-detail.component.html',
  styleUrls: ['./clients-detail.component.scss']
})
export class ClientsDetailComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  data = [];
  clients: Client[];
  dtTrigger:Subject<any> = new Subject();


  constructor(private http: HttpClient, 
              private appService: AppService) { }
   
 

  ngOnInit() {
  
   console.log('clients are fetched');
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5
      };
       this.appService.getClients().subscribe(
          data => { this.clients = data; 
          console.log('clients fetched',this.clients);
          this.dtTrigger.next();
         
      });


  }

}
