import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {User} from '../../models/user';

/*
  Generated class for the UserDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html'
})
export class UserDetailPage {
  login: User;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
      this.login = navParams.get('login');
  }

  ionViewDidLoad() {
    console.log('Hello UserDetail Page');
  }

}
