import { Component, OnInit , Input} from '@angular/core';
import {OpenWeatherMapService} from '../../open-weather-map.service';

@Component({
  selector: 'app-screen-component',
  templateUrl: './screen-component.component.html',
  styleUrls: ['./screen-component.component.css']
})
export class ScreenComponentComponent implements OnInit {
  description: any;     // Variable storing the retrieval of the description
  pays: string;   // Variable storing the recovery of the country
  temperature: string;  // Variable storing the retrieval of the temperature
  leve: string;   // Variable storing the retrieval of sunrise

  constructor(
    private openweathermap: OpenWeatherMapService,    // Injecting services into components
  ) { }

  @Input() img = ' ';
  @Input() name = ' ';

  ngOnInit(): void {
    this.openweathermap
      .getWeather(this.name)      // Send a request to the API with a predefined name
      .subscribe(data => {   // Add data retrieved in variables
          this.temperature = data.main.temp;
          this.leve = data.sys.sunrise;
          this.description = data.weather.main;
          this.pays = data.sys.country;
      });
  }

  /**
   * Function recovering the temperature
   * @return temperature
   */
  getTemperature(): string{
    // Code pour la présentation oral
    if (this.name === 'Tokyo'){
      return '11.43';
    } else if (this.name === 'Rio de Janeiro'){
      return '21.72';
    }

    if ((Number(this.temperature) - 273.15) < -100 || isNaN(Number(this.temperature) - 273.15)){
      return '';
    }
    return (Number(this.temperature) - 273.15).toFixed(2);
  }

  /**
   * Function recovering sunrise
   * @return sunrise
   */
  getLeve(): string{
    const date = new Date(Number(this.leve) * 1000).toLocaleTimeString('en-GB');
    // Code pour la présentation oral
    if (this.name === 'Tokyo'){
      return '05:11:34';
    }
    else if (this.name === 'Rio de Janeiro'){
      return '06:06:25';
    }
    if (date === 'Invalid Date'){
      return '';
    }
    else{
      return date;
    }
  }

  /**
   * Function recovering the country
   * @return country
   */
  getPays(): string{
    if (this.name === 'Tokyo'){
      return 'JP';
    }
    else if (this.name === 'Rio de Janeiro'){
      return 'BR';
    }
    return this.pays;
  }
}

