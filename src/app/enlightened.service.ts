import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { apiKey } from './api-keys';

@Injectable()
export class EnlightenedService {

  bills: any;

  constructor(private http: Http) {
    let headers = new Headers();
    headers.append('X-API-Key', apiKey);
    this.http.get('https://api.propublica.org/congress/v1/115/senate/bills/active.json', { headers: headers }).subscribe(response => {
    console.log(response.json());
  });
  }

// https://api.propublica.org/congress/v1/115/senate/members.json
}
