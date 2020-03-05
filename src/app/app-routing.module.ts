import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'splash', component: SplashComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'products', component: ProductsComponent },
  { path: 'productdetails', component: ProductdetailsComponent },
  { path: 'enquiry', component: EnquiryComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'otpverify', component: OtpverifyComponent },
  { path: 'otpnextpart', component: OtpnextpartComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'cart', component: CartComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'notifications', component: NotificationComponent },
  { path: 'productsvri', component:  ProductlistComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
