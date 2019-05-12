import { Component, OnInit } from '@angular/core';
import { CommonService } from '@shared/services/common.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public cmnSrv: CommonService) {  }

  ngOnInit() {
  }

  sidebarItems = [
    {link: '/admin/home', label: 'Dashboard', icon: 'dashboard'},
    { link: '/admin/timesheet',  label: 'TimeSheet', icon: 'people'},
    { link: '/admin/client',  label: 'Client', icon: 'shopping_basket'},
    { link: '/admin/order',  label: 'Order', icon: 'shopping_basket'},
    { link: '/admin/user',  label: 'User', icon: 'shopping_basket'},
    { link: '/admin/project',  label: 'Project', icon: 'shopping_basket'},
    { link: '/admin/task',  label: 'Tasks', icon: 'shopping_basket'}
  ];
}
