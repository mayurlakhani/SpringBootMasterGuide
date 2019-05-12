import { Component, OnInit } from '@angular/core';
import {Order} from '../../order';
import { AppService } from '../../app.service';
import {Client} from '../../client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {LocalStorageService} from 'ngx-webstorage';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

 order:Order= new Order();
 submitted = false;
 client:Client[];
 clientName:any;
 tasks:any;
clients$: Observable<Client[]>;
  private searchTerms = new Subject<string>();

  constructor(private http: HttpClient, 
              private appService: AppService, public store:LocalStorageService) { }

 search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.clients$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.appService.searchClient(term)),
    );
     this.profile = this.store.retrieve('username');
     this.appService.getListClient(this.profile).subscribe(
          data => { this.clientName = data; 
          console.log('clients fetched',this.clientName);
         
         
      });

       // ********get processDefinationKey from TaskDefinationKey

 var taskDefinitionKey='Task_04pgszd';
   
   return this.appService.getHeroNo(taskDefinitionKey).subscribe(tasks => {
          this.tasks=tasks;
          console.log('taskdetails',tasks);
          //this.appService.SaveTaskByDefKeyDetail(tasks); //****save to db
         
    },
    error => console.log(error));  
  }


  newOrder(): void {
    this.submitted = false;
    this.order = new Order();
  }

  
  save(){
    var id= document.getElementById("taskId").value;
      if(id == undefine | id == null)
      {  this.showError();  }

    this.order.id=id;
    this.order.profile=this.storage.retrieve('username');
    console.log("order",this.order);
    const obj = JSON.stringify(this.order);
     this.http.post(`http://localhost:8081/save/order`,obj, httpOptions).subscribe(data=>{console.log("method",this.order);});
      this.appService.createOrder(this.order,this.order.id).subscribe(
            data => {
            console.log("inside",this.timesheet);
           this.order = new Order(); 
      });  
    this.showSuccess();
  	
    
  }

   onSubmit() {
    this.submitted = true;
    this.save();
  }


  

}
