import { Route } from "../../node_modules/@angular/compiler/src/core";

export interface MenuItem {
    /** Menu item title */
    title: string;
    /** Route for the router */
    route: string;
}

export interface Schedule {
    startLocation: string;

    endLocation: string;

    times: ScheduleItem[]; 
}

export interface ScheduleItem {

    arrival: Date;

    departure: Date;
}
