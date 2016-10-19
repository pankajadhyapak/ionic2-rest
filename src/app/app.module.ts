import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { UsersPage } from '../pages/users/users';
import { UserDetailPage } from '../pages/user-detail/user-detail';
import { UsersProvider } from '../providers/users-provider';

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    UserDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    UserDetailPage
  ],
  providers: [UsersProvider]
})
export class AppModule {}
