import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SunsetService {
  private URL = 'https://api.sunrise-sunset.org/json?lat=';

  constructor(private httpClient: HttpClient) { }

  getData(lat: number, lng: number): Observable<any>{
    return this.httpClient
      .get(this.URL + lat + '&lng=' + lng);
  }
}

// https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400
// results ---> sunrise, sunset, day_length
