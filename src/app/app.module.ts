import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {LandingModule} from './landing/landing.module';
import { LandingComponent } from './landing/landing.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import {AuthModule, BookingsModule} from './shared';

export const routes: Routes = [
  {path: '', component: LandingComponent, pathMatch: 'full'},
  {path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    LandingModule,
    AuthModule.forRoot(),
    BookingsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
