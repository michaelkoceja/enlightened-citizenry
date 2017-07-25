import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { apiKey } from './api-keys';

@Injectable()
export class EnlightenedService {

  bills: any;

  constructor(private http: Http) {
    let headers = new Headers();
    headers.append('X-API-Key', apiKey);
    this.http.get('https://api.propublica.org/congress/v1/115/senate/members.json', { headers: headers }).subscribe(response => {
    console.log(response.json());
  });
  }

  // getBills(bills) {
  // this.http.get(`https://api.propublica.org/congress/v1/115/${bills}/chamber.json`, this.attachHeader()).subscribe((data) => {
  //   this.bills = data.json().results[0].members;
  //   console.log(this.bills);
  //   return this.bills;
  // });
}

  // attachHeader() {
  // var headers = new Headers();
  // headers.append('X-API-Key', apiKey);
  // var header = {headers: headers};
  // return header;
  // }
// }
