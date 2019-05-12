import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, pipe } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {User} from '.././user';
import { AppService } from '.././app.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class PageService {

user: User=new User();

 constructor(private http: HttpClient, private appService:AppService) { }

  

   getList(): void {
   alert("hello");
    this.http.get(`http://localhost:8080/engine-rest/user`);     
         
  }

  CreateUser(user: Object): Observable<Object> {
    return this.http.post(`http://localhost:8080/engine-rest/user/create`, user);
  }

   

}
