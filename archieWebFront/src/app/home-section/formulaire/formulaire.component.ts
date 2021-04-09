import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {OpenWeatherMapService} from '../../open-weather-map.service';
import { SunsetService } from '../../sunset.service';

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
    googleMapType = 'hybrid';


  ngOnInit(): void {
    this.formulaireSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  getSunset(): void {
    this.sunsetService
      .getData(this.dataMeteo?.coord.lon , this.dataMeteo?.coord.lat)
      .subscribe(data => this.dataSunset = data);
  }


  sendToAPIXU(formValues: any): void {
    this.openweathermap
      .getWeather(formValues.location)
      .subscribe(data => this.dataMeteo = data);
    this.sunsetService
      .getData(this.dataMeteo?.coord.lon , this.dataMeteo?.coord.lat)
      .subscribe(data => this.dataSunset = data);
    console.log(this.dataMeteo);
    console.log(this.dataSunset);
  }
}

// 0d62963a0f6c90c582b71e8dbd7979e3
// api.openweathermap.org/data/2.5/weather?q=Paris&APPID=0d62963a0f6c90c582b71e8dbd7979e3
