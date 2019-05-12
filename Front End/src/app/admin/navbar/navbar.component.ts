import { Component, OnInit } from '@angular/core';
import { CommonService } from '@shared/services/common.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( public cmnSrv: CommonService) { }

  ngOnInit() {}

}
