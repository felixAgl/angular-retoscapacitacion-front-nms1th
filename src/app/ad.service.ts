import { Injectable }           from '@angular/core';

import { CityWeatherComponent }   from './city-weather/city-weather.component';
import { WeatherItem }            from './weather-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new WeatherItem(CityWeatherComponent, {city: 'City Name: Medellin', code: 'Code Country: co'}),

      new WeatherItem(CityWeatherComponent, {city: 'City Name: Bogota', code: 'Code Country: co'}),

      new WeatherItem(CityWeatherComponent, {city: 'City Name: Rionegro', code: 'Code Country: co'}),

      new WeatherItem(CityWeatherComponent, {city: 'City Name: Cali', code: 'Code Country: co'}),

      new WeatherItem(CityWeatherComponent, {city: 'City Name: London', code: 'Code Country: uk'}),
    ];
  }
}