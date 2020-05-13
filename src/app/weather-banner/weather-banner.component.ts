import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { WeatherDirective } from '../weather.directive';
import { WeatherItem }      from '../weather-item';
import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-weather-banner',
  templateUrl: './weather-banner.component.html',
  styleUrls: ['./weather-banner.component.css']
})
export class WeatherBannerComponent implements OnInit, OnDestroy  {

  @Input() ads: WeatherItem[];
  currentAdIndex = -1;
  @ViewChild(WeatherDirective, {static: true}) appWeather: WeatherDirective;
  interval: any;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const weatherItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(weatherItem.component);

    const viewContainerRef = this.appWeather.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = weatherItem.data;
  }
  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

}