import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-section',
  templateUrl: './carousel-section.component.html',
  styleUrls: ['./carousel-section.component.css']
})
export class CarouselSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgName1 = "screen01";
  imgName2 = "screen02";
  imgName3 = "screen03";
  temperature = 30;

}
