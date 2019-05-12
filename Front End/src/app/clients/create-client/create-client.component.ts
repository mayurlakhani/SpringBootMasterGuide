import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import {Client} from '../../client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {LocalStorageService} from 'ngx-webstorage';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

client:Client= new Client();
 submitted = false;

  constructor(private http: HttpClient, 
              private appService: AppService, private storage:LocalStorageService, public toastr:ToastrManager) { }
 
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
        this.toastr.customToastr('Custom Toast', null, { enableHTML: true });
    }

    showToast(position: any = 'top-left') {
        this.toastr.infoToastr('This is a toast.', 'Toast', { position: position });
    }

  ngOnInit() {

  // ********get processDefinationKey from TaskDefinationKey

 var taskDefinitionKey='Task_1rfm8w2';
   
   return this.appService.getHeroNo(taskDefinitionKey).subscribe(tasks => {
          this.tasks=tasks;
          console.log('taskdetails',tasks);
          //this.appService.SaveTaskByDefKeyDetail(tasks); //****save to db
         
    },
    error => console.log(error));
  }

  newClient(): void {
    this.submitted = false;
    this.client = new Client();
  }

  save(){
  var id= document.getElementById("taskId").value;
      if(id == undefined | id == null)
      {  this.showError();  }
   
    this.client.id=id;
    this.client.profile=this.storage.retrieve('username');
    console.log("client",this.client);
    const obj = JSON.stringify(this.client);
    this.appService.saveClient(this.client).subscribe(data => console.log(data), error => console.log(error));
      this.appService.createClient(this.client,this.client.id).subscribe(
            data => {
            console.log("inside",this.client);
            this.client = new Client();
      });  
    this.showSuccess();
  		
   

  }

   onSubmit() {
    this.submitted = true;
    this.save();
  }

}
