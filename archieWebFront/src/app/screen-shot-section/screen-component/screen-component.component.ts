import { Component,EventEmitter, OnInit ,Input} from '@angular/core';
import {OpenWeatherMapService} from '../../open-weather-map.service';
import { SunsetService } from '../../sunset.service';


@Component({
  selector: 'app-screen-component',
  templateUrl: './screen-component.component.html',
  styleUrls: ['./screen-component.component.css']
})
export class ScreenComponentComponent implements OnInit {

  public dataMeteo: any;
  public dataSunset: any;
  public description: any;
  public temperatureConv : any;
  public lon: number;
  public lat: number;
  public leverSoleil: string;

  constructor(
    private openweathermap: OpenWeatherMapService,
    private sunsetService: SunsetService
  ) { }

  @Input() img : String = " ";
  @Input() name : string = " ";

  

  ngOnInit(): void {
    this.openweathermap
    .getWeather(this.name)
    .subscribe(data => this.dataMeteo = data);
     /* Recuprere la temperature en kelvins*/
    this.temperatureConv=this.dataMeteo?.main.temp;
    /* Description meteo (nuageux,ensolleilé...)*/
    this.description=this.dataMeteo?.weather.main;

    this.sunsetService
      .getData(this.lon, this.lat)
      .subscribe(data => this.dataSunset = data);

      this.leverSoleil = this.dataSunset?.results.sunrise;
  }
  

}

