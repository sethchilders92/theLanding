import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ScheduleComponent } from './schedule/schedule.component';

export const appRoutes: Routes = [
  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: TopbarComponent,
  },
  {
    path: 'schedule', 
    component: ScheduleComponent
  },
  // {
  //   path: 'map',
  //   component: MapComponent
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidenavComponent,
    ScheduleComponent
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
