import { Component, OnInit, EventEmitter } from '@angular/core';
import { MenuItem } from '../interfaces';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {

  menuStatus: string;
  menuIsOpen: boolean;
  menuItems: MenuItem[];
  sidenavActions: EventEmitter<any>;
  sidenavParams: any[];
  
  constructor() {
    this.sidenavActions = new EventEmitter<any>();
    this.sidenavParams = [];

    this.menuItems = [
          { title: "Home", route: '/home' },
          { title: "Schedule", route: '/schedule' },
          { title: "Map", route: '/map' }
    ];
  }
  
  close() {
    this.sidenavActions.emit({ action: 'sideNav', params: ['hide'] });
  }
  
  // openMenu() {
  //   this.menuIsOpen = !this.menuIsOpen;
  //   this.menuIsOpen = this.menuIsOpen ? true : false;
  // }
}
