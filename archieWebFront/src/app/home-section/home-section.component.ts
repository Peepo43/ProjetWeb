import { Component } from '@angular/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css'],
})
export class HomeSectionComponent {
  zoom = 5;       // Preset map zoom value
  longitude = 2.00;   // Longitude of France
  latitude = 46.00;   // Latitude of France
  googleMapType = 'roadmap';    // Type of the map

  /**
   * Retrieves the latitude of the entered position
   * @param $event the form update event
   */
  receiveLat($event): void{
    this.latitude = $event;
    console.log(this.latitude);
  }

  /**
   * Retrieves the longitude of the entered position
   * @param $event the form update event
   */
  receiveLon($event): void{
    this.longitude = $event;
    this.zoom = 9;
    console.log(this.longitude);
  }
}
