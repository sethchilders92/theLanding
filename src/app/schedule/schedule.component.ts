import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  daysOfWeek = [{
    day: 'Sunday',
    value: 0
  }, {
    day: 'Monday',
    value: 1
  }, {
    day: 'Tuesday',
    value: 2
  }, {
    day: 'Wednesday',
    value: 3
  }, {
    day: 'Thursday',
    value: 4
  }, {
    day: 'Friday',
    value: 5
  }, {
    day: 'Saturday',
    value: 6
  }];

  get today() {
    return this.daysOfWeek.find(day => day.value === new Date().getDay());
  }

  get schedule() {
    if (this.today.value === 1 || this.today.value === 3 || this.today.value === 5) {
      return 'MWF';
    } else if (this.today.value === 2 || this.today.value === 4) {
      return 'TTh';
    } else {
      return 'S';
    }
  }

  constructor(public dataService: DataService) { }

  ngOnInit() {
    // this.today = this.daysOfWeek.find(day => day.value === date.getDay());
    console.log(this.today.day);
  }

}
