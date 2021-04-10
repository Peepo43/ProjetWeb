import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {OpenWeatherMapService} from '../../open-weather-map.service';
import { SunsetService } from '../../sunset.service';

// TODO : Modifier appel méthode de getWeather pour sunset et pour la map
//        utiliser git mise en forme de OpenWeatherMap
//        Mettre la map avec pos predefini    VV
//        Mettre en forme le site web
//        Logo + Carte en responsive V
//        Rajouter le texte de Fatih
//        Interface = proto
//        Si -273 ne rien afficher dans Tempererature


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  public formulaireSearchForm!: FormGroup;
  public dataMeteo: any;
  public dataSunset: any;
  constructor(private formBuilder: FormBuilder,
              private openweathermap: OpenWeatherMapService,
              private sunsetService: SunsetService) { }

  ngOnInit(): void {
    this.formulaireSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues: any): void {
    this.openweathermap
      .getWeather(formValues.location)
      .subscribe(data => this.dataMeteo = data);
    // this.getSunset(this.dataMeteo?.coord.lon, this.dataMeteo?.coord.lat);
    console.log(this.dataMeteo);
  }

  getSunset(lon: number, lat: number): void {
    this.sunsetService
      .getData(lon, lat)
      .subscribe(data => this.dataSunset = data);
  }

  getPosition(): string{
    return this.dataMeteo?.name;
  }

  getTemperature(): string{
    if ((this.dataMeteo?.main.temp - 273.15) < -100 || isNaN(this.dataMeteo?.main.temp - 273.15)){
      return '';
    }
    return (this.dataMeteo?.main.temp - 273.15).toFixed(2) + '°';
  }

  getLeve(): string{
    return this.dataSunset?.results.sunrise;
  }

  getCouche(): string{
    return this.dataSunset?.results.sunset;
  }

  getDuree(): string{
    return this.dataSunset?.results.day_length;
  }

}

// 0d62963a0f6c90c582b71e8dbd7979e3
// api.openweathermap.org/data/2.5/weather?q=Paris&APPID=0d62963a0f6c90c582b71e8dbd7979e3

