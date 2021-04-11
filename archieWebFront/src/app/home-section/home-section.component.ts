import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css']
})
export class HomeSectionComponent implements OnInit {
  zoom = 5;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    minZoom: 5
  };

  ngOnInit(): void {
    this.center = {
      lat: 46.00,
      lng: 2.00,
    };
  }
}
