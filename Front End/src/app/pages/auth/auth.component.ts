import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
import { Observable, Subject, pipe } from 'rxjs';
import {User} from '../../user';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

    submitted = false;
    user:User=new User();


 constructor(private http: HttpClient,private appService:AppService, private router: Router,private localSt:LocalStorageService) { }
  

  ngOnInit() { 
     
  }



  login(username: string, password: string) {
     
       this.appService.getAuthenticatedUser(username,password).subscribe(data => {
       if(data.authenticated ==true){
          console.log('username',username);
          this.localSt.store('username',username);
         this.router.navigate(['/dashboard']);

       }
       else{
            alert("You are not authorized user");
             this.router.navigate(['/login']);
         }
         }, error => console.log(error));
    
    }


   


   onSubmit() {
    this.submitted = true;
   
  }

 





}
