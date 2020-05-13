import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConsumeApiService {

  apiKey = '984bc1eba3a2636ce96834e35ca4c771'
  URI: string='';

  constructor(protected http: HttpClient) { 
    this.URI =`https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`
  }

  getWeather(cityName: string, countryCode: string) {
    return this.http.get(`${this.URI}${cityName},${countryCode}`);
  }

}



