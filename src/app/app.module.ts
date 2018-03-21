import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MomentModule } from 'angular2-moment';

import { FIREBASE_CREDENTIALS } from './credentials.firebase';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MusiciansPage } from '../pages/musicians/musicians';
import { VenuesPage } from '../pages/venues/venues';
import { LoginPage } from '../pages/login/login';
import { EventsPage } from '../pages/events/events';
import { ContractsPage } from '../pages/contracts/contracts';
import { ChatPage } from '../pages/chat/chat';
import { MusicianPage } from '../pages/musician/musician';
import { VenuePage } from '../pages/venue/venue';

import { RestProvider } from '../providers/rest/rest';
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MusiciansPage,
    VenuesPage,
    LoginPage,
    EventsPage,
    ContractsPage,
    ChatPage,
    MusicianPage,
    VenuePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp),
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MusiciansPage,
    VenuesPage,
    LoginPage,
    EventsPage,
    ContractsPage,
    ChatPage,
    MusicianPage,
    VenuePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Keyboard,
    RestProvider,
    AuthProvider
  ]
})
export class AppModule {}