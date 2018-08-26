import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { MapComponent } from './map/map.component';

export const appRoutes: Routes = [
  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: ScheduleComponent,
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'map',
    component: MapComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ScheduleComponent,
    MapComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
  ),
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
