import { Component, OnInit, Input } from '@angular/core';

import { AdComponent }       from '../ad.component';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements AdComponent {

  @Input() data: any;
  constructor() { }

}