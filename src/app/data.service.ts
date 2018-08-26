import { Injectable } from '@angular/core';
import { Schedule, ScheduleItem } from './interfaces';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  schedule = [{
    arrival: this.randomDate(new Date(2012, 0, 1), new Date()),
    departure: this.randomDate(new Date(2012, 0, 1), new Date())
  }, {
    arrival: this.randomDate(new Date(2012, 0, 1), new Date()),
    departure: this.randomDate(new Date(2012, 0, 1), new Date())
  }, {
    arrival: this.randomDate(new Date(2012, 0, 1), new Date()),
    departure: this.randomDate(new Date(2012, 0, 1), new Date())
  }, {
    arrival: this.randomDate(new Date(2012, 0, 1), new Date()),
    departure: this.randomDate(new Date(2012, 0, 1), new Date())
  }];

  constructor() { }

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

}
