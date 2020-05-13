import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';
import { ConsumeApiService } from './consume-api/consume-api.service';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UploadBetsComponent } from './upload-bets/upload-bets.component';
import { ConsumeApiComponent } from './consume-api/consume-api.component';
import { ColdWeatherComponent } from './cold-weather/cold-weather.component';
import { HotWeatherComponent } from './hot-weather/hot-weather.component';
import { WeatherDirective } from './weather.directive';
import { WeatherBannerComponent } from './weather-banner/weather-banner.component';
import { CityWeatherComponent } from './city-weather/city-weather.component';
import { AdService } from './ad.service';



@NgModule({
  imports:      [ BrowserModule, FormsModule,BrowserModule, HttpClientModule,
  RouterModule.forRoot([
      { path: '', component: ConsumeApiComponent },
      { path: 'cold-weather', component: ColdWeatherComponent },
      { path: 'hot-weather', component: HotWeatherComponent },

    ])
  ],
  exports:[RouterModule,
  ColdWeatherComponent,
  HotWeatherComponent],
  declarations: [ AppComponent, HelloComponent, UploadBetsComponent, ConsumeApiComponent, ColdWeatherComponent, HotWeatherComponent, WeatherDirective, WeatherBannerComponent, CityWeatherComponent],

  entryComponents: [CityWeatherComponent, ConsumeApiComponent],
  bootstrap:    [ AppComponent ],
  providers: [ConsumeApiService, AdService]
})
export class AppModule { }
