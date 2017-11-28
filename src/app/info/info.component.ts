import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sc-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input()
  public data;

  ngOnInit() {
  }

}
