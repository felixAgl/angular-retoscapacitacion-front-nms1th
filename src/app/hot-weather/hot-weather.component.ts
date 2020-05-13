import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hot-weather',
  templateUrl: './hot-weather.component.html',
  styleUrls: ['./hot-weather.component.css']
})
export class HotWeatherComponent implements OnInit {

  constructor( private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
  }

}