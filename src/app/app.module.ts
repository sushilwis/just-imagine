import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SigninComponent } from './signin/signin.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { RegisterComponent } from './register/register.component';
import { OtpverifyComponent } from './otpverify/otpverify.component';
import { OtpnextpartComponent } from './otpnextpart/otpnextpart.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { CartComponent } from './cart/cart.component';
import { SettingsComponent } from './settings/settings.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SplashComponent } from './splash/splash.component';
import { NotificationComponent } from './notification/notification.component';
import { ProductlistComponent } from './productlist/productlist.component';
@NgModule({
  declarations: [
    AppComponent, 
    SplashComponent,
    SigninComponent, 
    ProductsComponent,
    ProductdetailsComponent,
    EnquiryComponent,
    RegisterComponent,
    OtpverifyComponent,
    OtpnextpartComponent,
    ThankyouComponent,
    EditprofileComponent,
    CartComponent,
    SettingsComponent,
    CheckoutComponent,
    NotificationComponent,
    ProductlistComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
