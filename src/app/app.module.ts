import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from '@angular/fire';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { RegisterPage } from '../pages/register/register';
import {PanierPage} from '../pages/panier/panier'
import { Facebook } from '@ionic-native/facebook';
import { ShareProvider } from '../providers/share/share';
import { NgxQRCodeModule} from 'ngx-qrcode2';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ChoicePage } from '../pages/choice/choice';
import { QuantityPage } from '../pages/quantity/quantity';
import { RecuePage } from '../pages/recue/recue';
import { PaymentPage } from '../pages/payment/payment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginPage } from '../pages/login/login';
import { ForgetPage } from '../pages/forget/forget';
import { LoadingProvider } from '../providers/loading/loading';
//import { from } from 'rxjs';
export const firebaseConfig= {
  apiKey: "AIzaSyB1DoJLuRfjBixhwtkAhnZkbKzlm9cGNQg",
  authDomain: "quickpay-b68c0.firebaseapp.com",
  databaseURL: "https://quickpay-b68c0.firebaseio.com",
  projectId: "quickpay-b68c0",
  storageBucket: "quickpay-b68c0.appspot.com",
  messagingSenderId: "932601026587"
};
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    PanierPage,ChoicePage,QuantityPage,
    RecuePage,
    PaymentPage,
    ChoicePage,
    LoginPage,
    ForgetPage
  ],
  imports: [
    NgxQRCodeModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,RegisterPage,
    PanierPage,
    ChoicePage,
    QuantityPage,
    RecuePage,
    PaymentPage,
    ChoicePage,
    LoginPage,
    ForgetPage

  ],
  providers: [
    BarcodeScanner,
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    ShareProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    ShareProvider,
    LoadingProvider
  ]
})
export class AppModule {}
