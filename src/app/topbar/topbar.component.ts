import { Component, OnInit, EventEmitter } from '@angular/core';
import { MenuItem, Schedule, ScheduleItem } from '../interfaces';

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
  schedule: Schedule;
  
  constructor() {
    this.sidenavActions = new EventEmitter<any>();
    this.sidenavParams = [];

    // populate the menu
    this.menuItems = [
          { title: "Home", route: '/home' },
          { title: "Schedule", route: '/schedule' },
          { title: "Map", route: '/map' }
    ];

    // add some times to the schedule
    // this.schedule.times = [{
    //   arrival: new Date(),
    //   departure: new Date()
    // }];
  }
  
  close() {
    this.sidenavActions.emit({ action: 'sideNav', params: ['hide'] });
  }
  
  // openMenu() {
  //   this.menuIsOpen = !this.menuIsOpen;
  //   this.menuIsOpen = this.menuIsOpen ? true : false;
  // }
}
