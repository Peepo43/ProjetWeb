import { Component, OnInit ,Input} from '@angular/core';
import {OpenWeatherMapService} from '../../open-weather-map.service';


@Component({
  selector: 'app-screen-component',
  templateUrl: './screen-component.component.html',
  styleUrls: ['./screen-component.component.css']
})
export class ScreenComponentComponent implements OnInit {

  public dataMeteo: any;

  constructor(
    private openweathermap: OpenWeatherMapService
  ) { }

  @Input() img : String = " ";
  @Input() name : String = " ";
  ville : String = "Rome";
  temperatureVille = "30"

  ngOnInit(): void {
  }
  

  sendToAPIXU(name: string): void {
    this.openweathermap
      .getWeather(name)
      .subscribe(data => this.dataMeteo = data);
    console.log(this.dataMeteo);
  }

}

