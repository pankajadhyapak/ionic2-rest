import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users-provider';
import {User} from '../../models/user';
import { UserDetailPage } from '../../pages/user-detail/user-detail';

/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: User[]

  constructor(public navCtrl: NavController, private usersProvider: UsersProvider, public loadingCtrl: LoadingController) {
    let loader = this.loadingCtrl.create({
      content: "Loading User's...Please wait"
    });
    loader.present();
      usersProvider.load().subscribe(users => {
          this.users = users;
          loader.dismissAll();
       })
  }

  goToDetails(login: string) {
    this.navCtrl.push(UserDetailPage, {login});
  }

  ionViewDidLoad() {
    console.log('Hello Users Page');
  }

}
