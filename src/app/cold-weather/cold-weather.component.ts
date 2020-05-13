import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { ConsumeApiService } from '../consume-api/consume-api.service';
import { ActivatedRoute } from '@angular/router';
import { coldTips } from '../coldTips';
//import { weather } from '../consume-api/consume-api.service';


@Component({
  selector: 'app-cold-weather',
  templateUrl: './cold-weather.component.html',
  styleUrls: ['./cold-weather.component.css']
})
export class ColdWeatherComponent implements OnInit {
  @Input() temp;
  @Output() tempf:EventEmitter<any> = new EventEmitter();
  coldTips;

  constructor( private route: ActivatedRoute) {
   }

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.coldTips = coldTips[+params.get('productId')];
    });
    //ConsumeApiService.getweather()
  }
  
  

}