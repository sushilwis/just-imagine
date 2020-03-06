import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { IonicModule } from '@ionic/angular';


const routes: Routes = [
  { path: 'thankyou', component: ThankyouComponent },  
  { path: 'cart', component: CartComponent },  
  { path: 'checkout', component: CheckoutComponent },
];

@NgModule({
  declarations: [ThankyouComponent, CartComponent, CheckoutComponent],
  imports: [
    IonicModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
