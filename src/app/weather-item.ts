import { Type } from '@angular/core';

export class WeatherItem {
  constructor(public component: Type<any>, public data: any) {}
}