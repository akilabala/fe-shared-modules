import { Component, OnInit } from '@angular/core';

import {BookingService} from './booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor(private _bookingService: BookingService) { }

  ngOnInit() {
    this._bookingService.createBooking();
  }

}
