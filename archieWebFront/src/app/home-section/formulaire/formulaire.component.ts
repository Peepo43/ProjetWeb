import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {OpenWeatherMapService} from '../../open-weather-map.service';

// TODO : utiliser git mise en forme de OpenWeatherMap
//        Mettre la map avec pos predefini    VV
//        Mettre en forme le site web
//        Rajouter le texte de Fatih
//        Interface = proto
//        Relier la carte et openWeather

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  public formulaireSearchForm!: FormGroup;
  public dataMeteo: any;
  constructor(private formBuilder: FormBuilder,
              private openweathermap: OpenWeatherMapService,
              ) { }

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
      .subscribe(data => this.dataMeteo = data);
    console.log(this.dataMeteo);
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
}

// 0d62963a0f6c90c582b71e8dbd7979e3
// api.openweathermap.org/data/2.5/weather?q=Paris&APPID=0d62963a0f6c90c582b71e8dbd7979e3

