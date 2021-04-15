import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {OpenWeatherMapService} from '../../open-weather-map.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  nom: string;    // Variable storing the retrieval of the name
  temperature: string;    // Variable storing the retrieval of the temperature
  lat: number;    // Variable storing the retrieval of the latitude
  lon: number;    // Variable storing the retrieval of the longitude
  leve: string;   // Variable storing the retrieval of sunrise
  couche: string;   // Variable storing the retrieval of sunset
  pression: string;   // Variable storing the retrieval of the pressure
  humidite: string;   // Variable storing the retrieval of the humidity
  flag = false;   // Flag used to display the results table
  @Output() latitude = new EventEmitter<number>();
  @Output() longitude = new EventEmitter<number>();

  constructor(private formBuilder: FormBuilder,   // Injecting services into components
              private openweathermap: OpenWeatherMapService,
  ) { }
  public formulaireSearchForm!: FormGroup;    // Retrieves the data from the form

  ngOnInit(): void {
    this.formulaireSearchForm = this.formBuilder.group({
      location: ['']      // Variable storing the retrieval of the form
    });
  }

  /**
   * Function retrieving the values of the API according to the position
   * @param formValues : form value (position)
   */
  sendToAPI(formValues: any): void {
    this.getWeather(formValues);
    this.flag = true;
  }

  /**
   * Function updating API data
   * @param formValues : form value (position)
   */
  getWeather(formValues: any): void{
    this.openweathermap
      .getWeather(formValues.location)    // Send a request to the API with a predefined name
      .subscribe(data => {     // Add data retrieved in variables
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

  /**
   * Function recovering the name of the position
   * @return position
   */
  getPosition(): string{
    return this.nom;
  }

  /**
   * Function sending latitude to another component
   */
  public sendLat(): void{
    this.latitude.emit(this.lat);
  }

  /**
   * Function sending latitude to another component
   */
  public sendLon(): void{
    this.longitude.emit(this.lon);
  }

  /**
   * Function recovering the temperature
   * @return temperature
   */
  getTemperature(): string{
    if ((Number(this.temperature) - 273.15) < -100 || isNaN(Number(this.temperature) - 273.15)){
      return '';
    }
    return (Number(this.temperature) - 273.15).toFixed(2) + '°';
  }

  /**
   * Function recovering sunrise
   * @return sunrise
   */
  getLeve(): string{
    const date = new Date(Number(this.leve) * 1000).toLocaleTimeString('en-GB');
    if (date === 'Invalid Date'){
      return '';
    }
    else{
      return date;
    }
  }

  /**
   * Function recovering sunset
   * @return sunset
   */
  getCouche(): string{
    const date = new Date(Number(this.couche) * 1000).toLocaleTimeString('en-GB');
    if (date === 'Invalid Date'){
      return '';
    }
    else{
      return date;
    }
  }

  /**
   * Function recovering the pressure
   * @return sunrise
   */
  getPression(): string{
    if (isNaN(Number(this.pression))) {
      return '';
    }
    else{
      return Number(this.pression) + ' hPa';
    }
  }

  /**
   * Function recovering the humidity
   * @return humidity
   */
  getHumidite(): string{
    if (isNaN(Number(this.humidite))) {
      return '';
    }
    else{
      return Number(this.humidite) + ' %';
    }
  }
}
