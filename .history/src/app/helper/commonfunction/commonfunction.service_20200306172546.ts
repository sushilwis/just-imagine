import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonfunctionService {

  constructor() { }



  getErrorText() {
    return {
      required: 'is required',
      minlength: `Minimum character required`,
      maxlength: `Maximum character allowed`,
      pattern: 'Invalid entry on',
      email: 'Please enter a valid'
    }
  }
}
