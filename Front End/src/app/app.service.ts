import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable, Subject, pipe } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {TimeSheet} from './dashboard/timesheet';
import {Client} from './client';
import {Order} from './order';
import {User} from './admin/user';
const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class AppService {

private baseUrl = 'http://localhost:8081';

constructor(private http: HttpClient) { }

  /*----------Login Service----------*/

  getAuthenticatedUser(username: string, password:string): Observable<any>{  
   return this.http.post(`${this.baseUrl}/rest/identity/verify`,{username:username, password:password}, httpOptions);
    
  }

 /**----------Start the process----------*/

  startProcess(timesheet: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/rest/process-definition/key/Process_1/start`, {}, httpOptions);
  }
 

   /**----------Get Details of Task by TaskDefinationKey----------*/

  getHeroNo(id: string) {
    const url = `${this.baseUrl}/rest/task?taskDefinitionKey=${id}`;
    return this.http.get(url)
      .pipe(
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
         // this.log(`${outcome} hero taskDefinitionKey=${id}`);
        }),
        catchError(this.handleError(`getHero taskDefinitionKey=${id}`))
      );
  }

   /**----------Get Details of Task by TaskDefinationKey of TimeSheet----------*/

  getTimeSheetTask(id: string) {
    const url = `${this.baseUrl}/rest/task?taskDefinitionKey=${id}`;
    return this.http.get(url)
      .pipe(
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
         
        }),
        catchError(this.handleError(`getTimeSheetTask taskDefinitionKey=${id}`))
      );
  }

   /**----------Get Details of Task by TaskDefinationKey of Clients----------*/

  getClientTask(id: string) {
    const url = `${this.baseUrl}/rest/task?taskDefinitionKey=${id}`;
    return this.http.get(url)
      .pipe(
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
         
        }),
        catchError(this.handleError(`getClientTask taskDefinitionKey=${id}`))
      );
  }

   /**----------Get Details of Task by TaskDefinationKey of Orders----------*/

  getOrderTask(id: string) {
    const url = `${this.baseUrl}/rest/task?taskDefinitionKey=${id}`;
    return this.http.get(url)
      .pipe(
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
         
        }),
        catchError(this.handleError(`getOrderTask taskDefinitionKey=${id}`))
      );
  }

   /**----------complete Pick Task:Cam----------*/

   pickUpTask(timesheetobj: Object, id:string): Observable<Object> {
   alert("running...timesheet");
      console.log("time",timesheetobj);
     var y= this.http.post(`${this.baseUrl}/rest/task/${id}/complete`, timesheetobj, httpOptions);
     console.log("y",y);
     return y;
  }

  /**----------complete Pick Task Client:Cam----------*/

   pickUpTaskClient(client: Object, id:string): Observable<Object> {
   alert("running...client");
      console.log("time",client);
     var y= this.http.post(`${this.baseUrl}/rest/task/${id}/complete`, client, httpOptions);
     console.log("y",y);
     return y;
  }

  /**----------complete Pick Task Client:Cam----------*/

   pickUpTaskOrder(order: Object, id:string): Observable<Object> {
   alert("running...order");
      console.log("time",order);
     var y= this.http.post(`${this.baseUrl}/rest/task/${id}/complete`, order, httpOptions);
     console.log("y",y);
     return y;
  }

  /**----------Create Timesheet:Cam----------*/

   createTimeSheet(timesheet: Object, id:string): Observable<Object> {
      console.log("time",timesheet);
     var x= this.http.post(`${this.baseUrl}/rest/task/${id}/complete`, timesheet, httpOptions);
     console.log("from service",x);
     return x;
  }
   /**----------Create Order:Cam----------*/

   createOrder(order: Object, id:string): Observable<Object> {
      console.log("order",order);
     var x= this.http.post(`${this.baseUrl}/rest/task/${id}/complete`, order, httpOptions);
     console.log("from service",x);
     return x;
  }

  /**----------Create Client:Cam----------*/

   createClient(client: Object, id:string): Observable<Object> {
      console.log("client",client);
     var x= this.http.post(`${this.baseUrl}/rest/task/${id}/complete`, client, httpOptions);
     console.log("from service",x);
     return x;
  }


   /**----------Get List Of Timesheet----------*/
   getTimeSheet(): Observable<any> {
    return this.http.get(`${this.baseUrl}/timesheets`);
   }

   /**----------Get List by User of TimeSheet----------*/
  getListTimeSheet(profile: string): Observable<TimeSheet> {
    const url = `${this.baseUrl}/timesheet/${profile}`;
    return this.http.get<TimeSheet>(url).pipe(
      catchError(this.handleError<TimeSheet>(`getListTimeSheet profile=${profile}`))
    );
  }

  /**----------delete Timesheet----------*/
  deleteTimeSheet(timesheet: number): Observable<any> {
   
    const url = `${this.baseUrl}/timesheet/${id}`;

    return this.http.delete(url, httpOptions);
    
  }

   /**----------update TimeSheet----------*/
    updateTimesheet(timesheet: TimeSheet, id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/timesheet/${id}`,timesheet,httpOptions);
  }

   getTimesheetById(id: number): Observable<TimeSheet> {
    const url = `${this.baseUrl}/timesheet/${id}`;
    return this.http.get<TimeSheet>(url).pipe(
      catchError(this.handleError<TimeSheet>(`getTimesheetById id=${id}`))
    );
  }

   /**----------Get List Of Clients----------*/
   getClients(): Observable<any> {
    return this.http.get(`${this.baseUrl}/clients`);
   }

   /**----------Get List by User of TimeSheet----------*/
  getListTimeSheet(profile: string): Observable<TimeSheet> {
    const url = `${this.baseUrl}/timesheet/${profile}`;
    return this.http.get<TimeSheet>(url).pipe(
      catchError(this.handleError<TimeSheet>(`getListTimeSheet profile=${profile}`))
    );
  }

    /**----------Get single Clients----------*/
  getSingleClient(id: number): Observable<Client> {
    const url = `${this.baseUrl}/client/${id}`;
    return this.http.get<Client>(url).pipe(
      catchError(this.handleError<Client>(`getSingleClient id=${id}`))
    );
  }

    /**----------Get single Order----------*/
  getSingleOrder(id: number): Observable<Order> {
    const url = `${this.baseUrl}/singleorder/${id}`;
    return this.http.get<Order>(url).pipe(
      catchError(this.handleError<Order>(`getSingleOrder id=${id}`))
    );
  }

   /**----------Get List by User of Client----------*/
  getListClient(profile: string): Observable<Client> {
    const url = `${this.baseUrl}/clients/${profile}`;
    return this.http.get<Client>(url).pipe(
      catchError(this.handleError<Client>(`getListClient profile=${profile}`))
    );
  }

   /**----------Get List by User of Order----------*/
  getListOrder(profile: string): Observable<Order> {
    const url = `${this.baseUrl}/order/${profile}`;
    return this.http.get<Order>(url).pipe(
      catchError(this.handleError<Order>(`getListOrder profile=${profile}`))
    );
  }

    /**----------Get List Of Project----------*/
   getProjectName(): Observable<any> {
   alert("2");
    return this.http.get(`${this.baseUrl}/project`);
   }

    /**----------Get List Of Activity----------*/
   getActivity(): Observable<any> {
    return this.http.get(`${this.baseUrl}/activity`);
   }

     /**----------save Clients:Rest----------*/
    saveClient(client: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/save/clients`, client);
  }

     /**----------update Clients----------*/
    updateClient(client: Client,id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/client/${id}`, client);
  }

     /**----------update Order----------*/
    updateOrder(order: Order,id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/order/${id}`, order);
  }
  
     /**----------delete Clients----------*/
    deleteClient(client: Client | number): Observable<Client> {
    const id = typeof client === 'number' ? client : client.client_id;
    const url = `${this.baseUrl}/client/${id}`;

    return this.http.delete<Client>(url, httpOptions).pipe(
      catchError(this.handleError<Client>('deleteClient'))
    );
  }

  /**----------Get List Of Orders----------*/
   getOrders(): Observable<any> {
    return this.http.get(`${this.baseUrl}/orders`);
   }

   /**----------save Order:Rest----------*/
    saveOrder(order: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/save/order`,order,httpOptions);
  }

  // getDefinitionKey(taskDefinitionKey:string): Observable<Object> {
   // return this.http.get(`${this.baseUrl}/rest/task/taskDefinitionKey,`);
//  }




/**----------To save details by TaskDefinationKey:Rest----------*/
  SaveTaskByDefKeyDetail(taskDetail: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/saveTasBykDefinationKey`,taskDetail);
  }
 

  /**----------save User:Cam----------*/
    saveUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/rest/user/create`, user);
  }

  /**----------Get User List: Cam----------*/
  getUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/rest/user`);
  }

  /**----------delete User: Cam----------*/
  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.profile.id;
    const url = `${this.baseUrl}/rest/user/${id}`;

    return this.http.delete<User>(url, httpOptions).pipe(
      catchError(this.handleError<User>('deleteUser'))
    );
  }

    /* search Client Name */
  searchClient(term: string): Observable<Client[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Client[]>(`${this.baseUrl}/getclient/?client_name=${term}`).pipe(
      catchError(this.handleError<Client[]>('searchClient', []))
    );
  }

 private extractData(res: Response) {
  let body = res.json();
        return body;
    }

 // getClient(id: number): Observable<Object> {
  //  return this.http.get(`http://localhost:8080/api/client/${id}`);
  //}


  deleteTimeSheet(id: string): Observable<any> {
    return this.http.delete(`http://localhost:8080/engine-rest/`, { responseType: 'text' });
  }


   private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
        //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
