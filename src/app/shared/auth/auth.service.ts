import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  public userLogin() {
    console.log(`User logged in!!!`);
  }

}
