import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {OpenWeatherMapService} from '../../open-weather-map.service';

// TODO : utiliser git mise en forme de OpenWeatherMap
//        Mettre la map avec pos predefini    VV
//        Mettre en forme le site web
//        Rajouter le texte de Fatih
//        Interface = proto
//        Relier la carte et openWeather
//        Mettre dans des variable toute les data utilisé

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  lat: number;
  lon: number;
  @Output() latitude = new EventEmitter<number>();
  @Output() longitude = new EventEmitter<number>();

  constructor(private formBuilder: FormBuilder,
              private openweathermap: OpenWeatherMapService,
              ) { }
  public formulaireSearchForm!: FormGroup;
  public dataMeteo: any;

  ngOnInit(): void {
    this.formulaireSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues: any): void {
    this.getWeather(formValues);
  }

  getWeather(formValues: any): void{
    this.openweathermap
      .getWeather(formValues.location)
      .subscribe(data => {
        console.log(data);
        this.dataMeteo = data;
        this.lat = data.coord.lat;
        this.lon = data.coord.lon;
        this.sendLon();
        this.sendLat();
      });
  }

  getPosition(): string{
    return this.dataMeteo?.name;
  }

  public sendLat(): void{
    this.latitude.emit(this.lat);
  }

  public sendLon(): void{
    this.longitude.emit(this.lon);
  }

  getTemperature(): string{
    if ((this.dataMeteo?.main.temp - 273.15) < -100 || isNaN(this.dataMeteo?.main.temp - 273.15)){
      return '';
    }
    return (this.dataMeteo?.main.temp - 273.15).toFixed(2) + '°';
  }

  getLeve(): string{
    const date = new Date(this.dataMeteo?.sys.sunrise * 1000).toLocaleTimeString('en-GB');
    if (date === 'Invalid Date'){
      return '';
    }
    else{
      return date;
    }
  }

  getCouche(): string{
    const date = new Date(this.dataMeteo?.sys.sunset * 1000).toLocaleTimeString('en-GB');
    if (date === 'Invalid Date'){
      return '';
    }
    else{
      return date;
    }
  }

  getPression(): string{
    if (isNaN(Number(this.dataMeteo?.main.pressure))) {
      return '';
    }
    else{
      return Number(this.dataMeteo?.main.pressure) + ' hPa';
    }
  }
  getHumidite(): string{
    if (isNaN(Number(this.dataMeteo?.main.humidity))) {
      return '';
    }
    else{
      return Number(this.dataMeteo?.main.humidity) + ' %';
    }
  }
}

// 0d62963a0f6c90c582b71e8dbd7979e3
// api.openweathermap.org/data/2.5/weather?q=Paris&APPID=0d62963a0f6c90c582b71e8dbd7979e3

