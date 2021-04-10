import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapService {
  private URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private URL2 = 'https://api.sunrise-sunset.org/json?lat=';
  private KEY = '&APPID=0d62963a0f6c90c582b71e8dbd7979e3';

  constructor(private httpClient: HttpClient) { }

  getWeather(location: string): Observable<any>{
   return this.httpClient
     .get(this.URL + location + this.KEY);
  }

  getData(lat: number, lng: number): Observable<any>{
    return this.httpClient
      .get(this.URL2 + lat + '&lng=' + lng);
  }
}


// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key} ==> 5 day/3 hour forecast
