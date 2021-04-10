import { Component,EventEmitter, OnInit ,Input} from '@angular/core';
import {OpenWeatherMapService} from '../../open-weather-map.service';


@Component({
  selector: 'app-screen-component',
  templateUrl: './screen-component.component.html',
  styleUrls: ['./screen-component.component.css']
})
export class ScreenComponentComponent implements OnInit {

  public dataMeteo: any;
  public temperature : any;
  public temperatureConv : any;

  constructor(
    private openweathermap: OpenWeatherMapService
  ) { }

  @Input() img : String = " ";
  @Input() name : string = " ";

  

  ngOnInit(): void {
    this.openweathermap
    .getWeather(this.name)
    .subscribe(data => this.dataMeteo = data);
    
    this.temperatureConv=this.dataMeteo?.main.temp;
  }
  

  /*sendToAPIXU(name: string): void {
    this.openweathermap
      .getWeather(name)
      .subscribe(data => this.dataMeteo = data);
    console.log(this.dataMeteo);
  }*/

}

