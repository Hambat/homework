import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sc-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input()
  public data;

  @Input()
  public navi;
  public mainData: any;

  constructor() { }

  ngOnInit() {
    this.mainData = this.data.filter(item => item.type === 'Kiev');
  }

  navClick(e, text) {
    e.preventDefault();

    this.mainData = this.data.filter(item => item.type === text);
  }

}
