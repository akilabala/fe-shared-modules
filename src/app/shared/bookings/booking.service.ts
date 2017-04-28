import { Injectable } from '@angular/core';

@Injectable()
export class BookingService {

  constructor() { }

  public createBooking() {
    console.log('Booking created');
  }

}
