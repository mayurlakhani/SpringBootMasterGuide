import { Component } from '@angular/core';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(public cmnSrv: CommonService) {  }

  sidebarItems = [
    {link: '/dashboard', label: 'Dashboard', icon: 'dashboard'},
    { link: '/dashboard/clients',  label: 'Clients', icon: 'people'},
    { link: '/dashboard/orders',  label: 'Orders', icon: 'shopping_basket'}
    
    
  
  ];

}
