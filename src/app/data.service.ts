import { Injectable } from '@angular/core';
import { Schedule, ScheduleItem } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  _schedule: Schedule;

  get schedule() {
    let schedule = this._schedule;
    schedule.times = [{
      arrival: this.randomDate(new Date(2012, 0, 1), new Date()),
      departure: this.randomDate(new Date(2012, 0, 1), new Date())
    }, {
      arrival: this.randomDate(new Date(2013, 0, 1), new Date()),
      departure: this.randomDate(new Date(2013, 0, 1), new Date())
    }, {
      arrival: this.randomDate(new Date(2014, 0, 1), new Date()),
      departure: this.randomDate(new Date(2014, 0, 1), new Date())
    }, {
      arrival: this.randomDate(new Date(2015, 0, 1), new Date()),
      departure: this.randomDate(new Date(2015, 0, 1), new Date())
    }, {
      arrival: this.randomDate(new Date(2015, 0, 1), new Date()),
      departure: this.randomDate(new Date(2015, 0, 1), new Date())
    }];

    return this._schedule;
  }

  constructor() {}

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

}
