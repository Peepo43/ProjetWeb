import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {OpenWeatherMapService} from '../../open-weather-map.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  public formulaireSearchForm!: FormGroup;
  public dataMeteo: any;
  constructor(
    private formBuilder: FormBuilder,
    private openweathermap: OpenWeatherMapService) { }
    lat = 48.00611;
    long = 0.199556;
    googleMapType = 'hybrid';


  ngOnInit(): void {
    this.formulaireSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues: any): void {
    this.openweathermap
      .getWeather(formValues.location)
      .subscribe(data => this.dataMeteo = data);
    console.log(this.dataMeteo);
  }
}

// 0d62963a0f6c90c582b71e8dbd7979e3
// api.openweathermap.org/data/2.5/weather?q=Paris&APPID=0d62963a0f6c90c582b71e8dbd7979e3
