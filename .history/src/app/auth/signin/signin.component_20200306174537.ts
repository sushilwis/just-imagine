import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/helper/apiService/data.service';
import { CommonfunctionService } from 'src/app/helper/commonfunction/commonfunction.service';
import { ToastService } from 'src/app/helper/toast/toast.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})

export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  showLoader: boolean;

  constructor(
    // private router: Router, 
    // private data: DataService,
    private formBuilder: FormBuilder,
    private commonfunc: CommonfunctionService,
    private toast: ToastService,
    ) { 
    
  }

  ngOnInit() {
    this.initializeForm();
  }

  //------------------------------------------------------------------
  //------ Signin Form initialization
  //------------------------------------------------------------------
  initializeForm() {
    this.signinForm = this.formBuilder.group({
      phone: ['', Validators.compose(
        [Validators.required, Validators.minLength(10), Validators.maxLength(13), Validators.pattern(/^[0-9]*$/)]
      )],
      password: [
        null, 
        Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])
      ],
    });
  }






  onSubmit() {
    this.showLoader = true;

    if (this.signinForm.invalid) {
      this.commonfunc.getFormErrors(this.signinForm).then(async(data: any) => { 
        console.log('form errors : >>>>>>>>>>', data);

        if(data && data.length > 0) {
          let toast = await this.toast.presentToast('Info!', data[0].errorText, "danger"); 
          toast.present();
        }  

      }).catch(err=> {
        console.log(err);        
      }); 
      
      this.showLoader = false;
      return;
    }
  }







  





  

}
