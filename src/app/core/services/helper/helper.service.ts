import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }
  convert(value: Date) {
    let datePipe = new DatePipe('en-US');
    return datePipe.transform(value,"yyyy-MM-dd");
 }
}

