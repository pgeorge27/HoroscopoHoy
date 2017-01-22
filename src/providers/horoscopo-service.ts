import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HoroscopoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HoroscopoService {

  static get parameters() {
    return [[Http]];
  }

  constructor(private http: Http) {
    console.log('Hello HoroscopoService Provider');
  }

  searchMovies() {
    var url = 'https://api.import.io/store/connector/142eeabe-fa9e-4608-8a8a-548cc67d53df/_query?input=webpage/url:http%3A%2F%2Fwww.televen.com%2Fhoroscopo%2F&&_apikey=905c002ea3b54f6bb924883013bf87739221bda1c7c49e2ccd9c1e0ffb0d63b5743bbbfcf8479789ed06d035635f06d5748f2923ca35a222ea1cc8e9f1621dad7b97a0bbb3e62cc57d9cdfac904ea816';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

}
