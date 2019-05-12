import { Component } from '@angular/core';
import { CommonService } from '@shared/services/common.service';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  constructor( public cmnSrv: CommonService, private storage:LocalStorageService) { }
  profile: string;
 profile = this.storage.retrieve('username');
  
}
