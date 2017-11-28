import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sc-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input()
  public data;

  ngOnInit() {

  }

}
