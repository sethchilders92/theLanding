import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
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
    MapComponent,
    HomeComponent
  ],
  imports: [
    // useHash is for rerouting in the browser on reload, seeing
    // as the hosting service only recognizes the main domain address
    RouterModule.forRoot(
      appRoutes, { useHash: true }
  ),
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
