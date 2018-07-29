import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  menuItems: [
    'Home',
    'Schedule',
    'Map'
  ];
  
  constructor() { }
}
