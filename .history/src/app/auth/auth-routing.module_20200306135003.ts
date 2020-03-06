import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RegisterComponent } from './register/register.component';
import { OtpverifyComponent } from './otpverify/otpverify.component';
import { OtpnextpartComponent } from './otpnextpart/otpnextpart.component';




const routes: Routes = [
  { 
    path: 'login', 
    component: SigninComponent 
  },
  { 
    path: 'register', 
    component: RegisterComponent 
  },
  { 
    path: 'otpverify', 
    component: OtpverifyComponent 
  },
  { 
    path: 'otpnextpart', 
    component: OtpnextpartComponent 
  },
];

@NgModule({
  declarations: [SigninComponent, RegisterComponent, OtpverifyComponent, OtpnextpartComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
