import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
// NavController 
@Component({
  selector: 'app-otpverify',
  templateUrl: './otpverify.component.html',
  styleUrls: ['./otpverify.component.scss'],
})
export class OtpverifyComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {}

  onClickBack() {
    this.navCtrl.pop();
  }

}
