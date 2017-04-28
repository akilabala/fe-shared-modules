import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import {AuthModule, BookingsModule} from '../shared';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([  {
      path: '',
      component: DashboardComponent,
      pathMatch: 'full'
    }]),
    AuthModule,
    BookingsModule
  ],
  declarations: [DashboardComponent]
})

export class DashboardModule { }
