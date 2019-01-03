import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  // whether or not the user is on the homepage or not
  isHomepage = false;

  scheduleMWF = [{
    arrival: 'The Landing',
    departure: 'Manwaring Center',
    times: [
      '7:15am', '7:25am', '7:40am', '7:50am',
      '8:00am', '8:15am', '8:25am', '8:40am',
      '8:50am', '9:00am', '9:15am', '9:25am',
      '9:40am', '9:50am', '10:00am', '10:15am',
      '10:25am', '10:40am', '10:50am', '11:00am',
      '11:15am', '11:25am', '11:40am', '11:50am',
      '12:25pm', '12:40pm', '12:50pm', '1:00pm',
      '1:15pm', '1:25pm', '1:40pm', '1:50pm',
      '2:00pm', '2:15pm', '2:25pm', '2:40pm',
      '2:50pm', '3:00pm', '3:15pm', '3:25pm',
      '3:40pm', '3:50pm', '4:00pm', '4:15pm',
      '4:25pm', '4:40pm', '4:50pm',
    ],
    days: ['Monday', 'Wednesday', 'Friday']
  }, {
    arrival: 'Manwaring Center',
    departure: 'The Landing',
    times: [
      '7:20am', '', '7:45am', '7:55am', '',
      '8:20am', '', '8:45am', '8:55am', '',
      '9:20am', '', '9:45am', '9:55am', '',
      '10:20am', '', '10:45am', '10:55am', '',
      '11:20am', '', '11:45am', '11:55am', '',
      '12:45pm', '12:55pm', '', '1:20pm', '',
      '1:45pm', '1:55pm', '', '2:20pm', '',
      '2:45pm', '2:55pm', '', '3:20pm', '',
      '3:45pm', '3:55pm', '', '4:20pm', '',
      '4:45pm', '4:55pm',
    ],
    days: ['Monday', 'Wednesday', 'Friday']
  }, {
    arrival: 'Romney',
    departure: 'Manwaring Center',
    times: [
      '', '7:30am', '', '', '',
      '', '8:30am', '', '', '',
      '', '9:30am', '', '', '',
      '', '10:30am', '', '', '',
      '', '11:30am', '', '', '12:30pm', '',
      '', '', '', '1:30pm', '',
      '', '', '', '2:30pm', '',
      '', '', '', '3:30pm', '',
      '', '', '', '4:30pm',
    ],
    days: ['Monday', 'Wednesday', 'Friday']
  }, {
    arrival: 'L-Lot',
    departure: 'Manwaring Center',
    times: [
      '', '', '', '', '8:05am',
      '', '', '', '', '9:05am',
      '', '', '', '', '10:05am',
      '', '', '', '', '11:05am',
      '', '', '', '', '', '',
      '', '1:05pm', '', '', '',
      '', '2:05pm', '', '', '',
      '', '3:05pm', '', '', '',
      '', '4:05pm', '', '',
    ],
    days: ['Monday', 'Wednesday', 'Friday']
  }, {
    arrival: 'The Landing',
    departure: 'Romney',
    times: [
      '', '7:35am', '', '', '',
      '', '8:35am', '', '', '',
      '', '9:35am', '', '', '',
      '', '10:35am', '', '', '',
      '', '11:35am', '',
      '', '12:35pm', '',
      '', '', '', '1:35pm', '',
      '', '', '', '2:35pm', '',
      '', '', '', '3:35pm', '',
      '', '', '', '4:35pm',
    ],
    days: ['Monday', 'Wednesday', 'Friday']
  }, {
    arrival: 'The Landing',
    departure: 'L-Lot',
    times: [
      '', '', '', '', '8:10am',
      '', '', '', '', '9:10am',
      '', '', '', '', '10:10am',
      '', '', '', '', '11:10am',
      '', '', '', '', '', '',
      '', '1:10pm', '', '', '',
      '', '2:10pm', '', '', '',
      '', '3:10pm', '', '', '',
      '', '4:10pm', '', '',
    ],
    days: ['Monday', 'Wednesday', 'Friday']
  }];

  scheduleTTh = [{
    arrival: 'The Landing',
    departure: 'Manwaring Center',
    times: [
      '7:15am', '7:25am', '7:40am', '7:50am',
      '8:00am', '8:15am', '8:25am', '8:40am',
      '8:50am', '9:00am', '9:15am', '9:25am',
      '9:40am', '9:50am', '10:00am', '10:15am',
      '10:25am', '10:40am', '10:50am', '11:00am',
      '11:15am', '11:25am', '11:40am', '11:50am',
      '12:25pm', '12:40pm', '12:50pm', '1:00pm',
      '1:15pm', '1:25pm', '1:40pm', '1:50pm',
      '3:00pm', '3:15pm', '3:25pm', '3:40pm',
      '3:50pm', '4:00pm', '4:15pm', '4:25pm',
      '4:40pm', '4:50pm',
    ],
    days: ['Tuesday', 'Thursday']
  }, {
    arrival: 'Manwaring Center',
    departure: 'The Landing',
    times: [
      '7:20am', '', '7:45am', '7:55am', '',
      '8:20am', '', '8:45am', '8:55am', '',
      '9:20am', '', '9:45am', '9:55am', '',
      '10:20am', '', '10:45am', '10:55am', '',
      '11:20am', '', '11:45am', '11:55am', '',
      '12:45pm', '12:55pm', '', '1:20pm', '',
      '1:45pm', '1:55pm', '', '3:20pm', '',
      '3:45pm', '3:55pm', '', '4:20pm', '',
      '4:45pm', '4:55pm',
    ],
    days: ['Tuesday', 'Thursday']
  }, {
    arrival: 'Romney',
    departure: 'Manwaring Center',
    times: [
      '', '7:30am', '', '', '',
      '', '8:30am', '', '', '',
      '', '9:30am', '', '', '',
      '', '10:30am', '', '', '',
      '', '11:30am', '',
      '', '12:30pm', '',
      '', '', '', '1:30pm', '',
      '', '',
      '', '3:30pm', '', '', '',
      '', '4:30pm',
    ],
    days: ['Tuesday', 'Thursday']
  }, {
    arrival: 'L-Lot',
    departure: 'Manwaring Center',
    times: [
      '', '', '', '', '8:05am',
      '', '', '', '', '9:05am',
      '', '', '', '', '10:05am',
      '', '', '', '', '11:05am',
      '', '', '', '', '', '',
      '', '1:05pm', '', '', '',
      '', '3:05pm',
      '', '', '', '', '4:05pm',
      '', '',
    ],
    days: ['Tuesday', 'Thursday']
  }, {
    arrival: 'The Landing',
    departure: 'Romney',
    times: [
      '', '7:35am', '', '', '',
      '', '8:35am', '', '', '',
      '', '9:35am', '', '', '',
      '', '10:35am', '', '', '',
      '', '11:35am', '', '', '12:35pm', '',
      '', '', '', '1:35pm', '',
      '', '',
      '', '3:35pm', '',
      '', '', '', '4:35pm',
    ],
    days: ['Tuesday', 'Thursday']
  }, {
    arrival: 'The Landing',
    departure: 'L-Lot',
    times: [
      '', '', '', '', '8:10am',
      '', '', '', '', '9:10am',
      '', '', '', '', '10:10am',
      '', '', '', '', '11:10am',
      '', '', '', '', '', '',
      '', '1:10pm', '', '', '',
      '', '3:10pm',
      '', '', '',
      '', '4:10pm', '', '',
    ],
    days: ['Tuesday', 'Thursday']
  }];

  constructor() { }

  randomDate(start, end) {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    // return date.toTimeString();
    let pm = false;
    if (date.getHours() > 11) {
      pm = true;
    }
    let hour = (date.getHours() % 12).toString();
    let minutes = (date.getMinutes()).toString();
    if (hour === '0') {
      hour = '12';
    }
    console.log(hour);
    if (Number(hour) < 10) {
      hour = '0' + hour;
    }
    console.log(minutes);
    if (Number(minutes) < 10) {
      minutes = '0' + minutes;
    }

    return `${hour}:${minutes} ${pm ? 'PM' : 'AM'}`;
  }

}
