import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {OpenWeatherMapService} from '../../open-weather-map.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  nom: string;
  temperature: string;
  lat: number;
  lon: number;
  leve: string;
  couche: string;
  pression: string;
  humidite: string;
  flag = false;
  @Output() latitude = new EventEmitter<number>();
  @Output() longitude = new EventEmitter<number>();

  constructor(private formBuilder: FormBuilder,
              private openweathermap: OpenWeatherMapService,
  ) { }
  public formulaireSearchForm!: FormGroup;

  ngOnInit(): void {
    this.formulaireSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues: any): void {
    this.getWeather(formValues);
    this.flag = true;
  }

  getWeather(formValues: any): void{
    this.openweathermap
      .getWeather(formValues.location)
      .subscribe(data => {
        this.nom = data.name;
        this.temperature = data.main.temp;
        this.lat = data.coord.lat;
        this.lon = data.coord.lon;
        this.leve = data.sys.sunrise;
        this.couche = data.sys.sunset;
        this.pression = data.main.pressure;
        this.humidite = data.main.humidity;

        this.sendLon();
        this.sendLat();
      });
  }

  getPosition(): string{
    return this.nom;
  }

  public sendLat(): void{
    this.latitude.emit(this.lat);
  }

  public sendLon(): void{
    this.longitude.emit(this.lon);
  }

  getTemperature(): string{
    if ((Number(this.temperature) - 273.15) < -100 || isNaN(Number(this.temperature) - 273.15)){
      return '';
    }
    return (Number(this.temperature) - 273.15).toFixed(2) + '°';
  }

  getLeve(): string{
    const date = new Date(Number(this.leve) * 1000).toLocaleTimeString('en-GB');
    if (date === 'Invalid Date'){
      return '';
    }
    else{
      return date;
    }
  }

  getCouche(): string{
    const date = new Date(Number(this.couche) * 1000).toLocaleTimeString('en-GB');
    if (date === 'Invalid Date'){
      return '';
    }
    else{
      return date;
    }
  }

  getPression(): string{
    if (isNaN(Number(this.pression))) {
      return '';
    }
    else{
      return Number(this.pression) + ' hPa';
    }
  }
  getHumidite(): string{
    if (isNaN(Number(this.humidite))) {
      return '';
    }
    else{
      return Number(this.humidite) + ' %';
    }
  }
}

// 0d62963a0f6c90c582b71e8dbd7979e3
// api.openweathermap.org/data/2.5/weather?q=Paris&APPID=0d62963a0f6c90c582b71e8dbd7979e3

