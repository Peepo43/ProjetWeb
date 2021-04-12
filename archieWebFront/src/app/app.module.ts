import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { FeaturedSectionComponent } from './featured-section/featured-section.component';
import { ScreenShotSectionComponent } from './screen-shot-section/screen-shot-section.component';
import { PeopleSectionComponent } from './people-section/people-section.component';
import { DownloadSectionComponent } from './download-section/download-section.component';
import { FooterComponent } from './footer/footer.component';
import { ScreenComponentComponent } from './screen-shot-section/screen-component/screen-component.component';
import { CarouselSectionComponent } from './carousel-section/carousel-section.component';
import { FormulaireComponent } from './home-section/formulaire/formulaire.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { OpenWeatherMapService } from './open-weather-map.service';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeSectionComponent,
    FeaturedSectionComponent,
    ScreenShotSectionComponent,
    PeopleSectionComponent,
    DownloadSectionComponent,
    FooterComponent,
    ScreenComponentComponent,
    CarouselSectionComponent,
    FormulaireComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA-9W_o6Cj79I2MZnqReqbrRNidLBInYn4'
    })
  ],
  providers: [OpenWeatherMapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
