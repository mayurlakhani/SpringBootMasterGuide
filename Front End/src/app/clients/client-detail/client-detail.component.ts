import { Component,OnInit,Input} from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { AppService } from '../../app.service';
import {Response} from '@angular/http';
import * as $ from 'jquery';
import {Client} from '../../client';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {
  @Input() client: Client;

   constructor(private route: ActivatedRoute,
   			   private http: HttpClient, 
               private appService:AppService,
               private location: Location) { }
   

  ngOnInit(): void {
    this.getSingleClient();
  }

  getSingleClient(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.appService.getSingleClient(id)
      .subscribe(client => this.client = client);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
  const id = +this.route.snapshot.paramMap.get('id');
    this.appService.updateClient(this.client,id)
      .subscribe(() => this.goBack());
  }

}
