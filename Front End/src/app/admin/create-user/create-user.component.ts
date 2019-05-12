import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Profile } from '../profile';
import { Credentials } from '../credentials';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppService } from '../../app.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

user:User = new User();
profile:Profile =new Profile();
credentials:Credentials =new Credentials();
submitted = false;


  constructor(private http: HttpClient, 
              private appService: AppService) { }
 

  ngOnInit(){}

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save(){
  		this.user.profile=this.profile;
 		this.user.credentials=this.credentials;
  		this.appService.saveUser(this.user).subscribe(data => console.log(data), error => console.log(error));
    	this.user = new User();
  }

   onSubmit() {
    this.submitted = true;
    this.save();
  }

}
