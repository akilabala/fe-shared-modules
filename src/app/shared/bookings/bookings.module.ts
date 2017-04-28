import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsComponent } from './bookings.component';
import {BookingService} from './booking.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookingsComponent],
  exports: [BookingsComponent],
  providers: []
})
export class BookingsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BookingsModule,
      providers: [BookingService]
    };
  }
}
