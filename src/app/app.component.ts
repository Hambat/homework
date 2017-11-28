import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpService} from "./http.service";
// import {User} from './user';


@Component({
  selector: 'sc-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hot Weather Widget';
  public loadImg = 'assets/images/gears.gif';
  public data$: Observable<widgetType[]>;
  public navi$: Observable<naviType[]>;
  public users$;

  public error;

  constructor(private httpService: HttpService) {}

  public ngOnInit() {
    this.data$ = this.httpService.getLoadData();
    this.navi$ = this.httpService.loadNavi();

    this.users$ = this.httpService.getUsers();

  }


}
