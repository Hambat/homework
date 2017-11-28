import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import {navi, widgetData} from "./data/index";

import {User} from "./user";

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {}

  // для примера, все ли правильно?
  getUsers(): Observable<User[]> {
    return this.http.get('http://52.14.152.4/api/users').map(data => {
      const userList = data['data'];

      return userList.map(function (user: any) {
        return {name: user.name, age: user.age};
      });
    })
      .catch((error: any) => {
        console.log(error);
        return Observable.throw(error);
      });
  }

  getLoadData(): Observable<widgetType[]> {
    return Observable.of(widgetData).delay(100);
  }

  // меню
  loadNavi(): Observable<naviType[]> {
    return  Observable.of(navi).delay(300);
  }

}
