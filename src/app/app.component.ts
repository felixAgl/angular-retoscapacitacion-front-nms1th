import { Component, OnInit } from '@angular/core';

import { AdService }         from './ad.service';
import { WeatherItem }            from './weather-item';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  name = 'Reto Capacitacion Front';
  back ='Click here to back'

  ads: WeatherItem[];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}


