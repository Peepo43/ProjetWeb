import { Component, OnInit } from '@angular/core';
import {OpenWeatherMapService} from '../open-weather-map.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-screen-shot-section',
  templateUrl: './screen-shot-section.component.html',
  styleUrls: ['./screen-shot-section.component.css']
})

export class ScreenShotSectionComponent implements OnInit {
  public formulaireSearchForm!: FormGroup;
  public dataMeteo: any;
  public temperature: any;

  constructor(
    private formBuilder: FormBuilder,
    private openweathermap: OpenWeatherMapService) { }
    

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

  sendToTown(ville: string): void {
    this.openweathermap
      .getWeather(ville)
      .subscribe(data => this.dataMeteo = data);
    console.log(this.dataMeteo);
  }

}