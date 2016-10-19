import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { User } from '../models/user';
/*
  Generated class for the UsersProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UsersProvider {
  ApiUrl = 'http://lar53.dev/api/v1';

  constructor(public http: Http) {
    console.log('Hello UsersProvider Provider');
  }
  load(): Observable<User[]> {
    return this.http.get(`${this.ApiUrl}/users`)
      .map(res => <User[]>res.json());
  }

}
