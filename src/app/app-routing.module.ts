import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { ColdWeatherComponent } from './cold-weather/cold-weather.component';
import { ConsumeApiComponent } from './consume-api/consume-api.component';
import { HotWeatherComponent } from './hot-weather/hot-weather.component';


const appRoutes:Routes=[
  {path:'', component: ConsumeApiComponent},
  {path:'cold-weather', component: ColdWeatherComponent},
  {path:'hot-weather', component: HotWeatherComponent}

]

@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
exports:[RouterModule]
})

export class AppRoutingModule { }