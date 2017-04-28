import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';

import {AuthModule} from '../shared';

@NgModule({
  imports: [
    CommonModule,
    AuthModule
  ],
  declarations: [LandingComponent]
})
export class LandingModule { }
