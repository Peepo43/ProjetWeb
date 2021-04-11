import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css'],
})
export class HomeSectionComponent implements OnInit {
  zoom = 5;
  longitude = 2.00;
  latitude = 46.00;
  googleMapType = 'roadmap';

  ngOnInit(): void {
  }

  receiveLat($event): void{
    this.latitude = $event;
    console.log(this.latitude);
  }

  receiveLon($event): void{
    this.longitude = $event;
    this.zoom = 9;
    console.log(this.longitude);
  }
}
