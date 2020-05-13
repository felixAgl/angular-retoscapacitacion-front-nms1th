import { Component, OnInit } from '@angular/core';
import { ConsumeApiService } from './consume-api.service';
import { ColdWeatherComponent } from '../cold-weather/cold-weather.component';


@Component({
  selector: 'app-consume-api',
  templateUrl: './consume-api.component.html',
  styleUrls: ['./consume-api.component.css']
})
export class ConsumeApiComponent implements OnInit {
  
  weather;
  constructor(protected consumeApiService : ConsumeApiService) {

   }
  ngOnInit() {
    
  }
  getWeather1(cityName:string, countryCode:string){
    this.consumeApiService.getWeather
    (cityName, countryCode)
    .subscribe(
      res => {console.log(res),
        this.weather = res, 
        console.log(this.weather.main.temp)},
      error => console.log(error)
    )
  } 
  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement){
    this.getWeather1(cityName.value, countryCode.value);

    cityName.value="";
    countryCode.value="";
    cityName.focus();

    return false;
  }
  tempWeather(){  
    if(this.weather.main.temp < 20.0)
    
    console.log(this.weather.main.temp)
  }
  

}