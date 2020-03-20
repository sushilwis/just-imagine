import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonfunctionService } from 'src/app/helper/commonfunction/commonfunction.service';
// NavController 

@Component({
  selector: 'app-otpverify',
  templateUrl: './otpverify.component.html',
  styleUrls: ['./otpverify.component.scss'],
})
export class OtpverifyComponent implements OnInit {

  constructor(public navCtrl: NavController, public commonfunc: CommonfunctionService) { }

  ngOnInit() {}


  //------------------------------------------------------------------
  //------ going to previous page
  //------------------------------------------------------------------
  onClickBack() {
    this.commonfunc.goToBack();
  }

}
