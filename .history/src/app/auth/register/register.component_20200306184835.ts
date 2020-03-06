import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/helper/apiService/data.service';
import { CommonfunctionService } from 'src/app/helper/commonfunction/commonfunction.service';
import { ToastService } from 'src/app/helper/toast/toast.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  showLoader: boolean;

  constructor(
    // private router: Router, 
    // private data: DataService,
    private formBuilder: FormBuilder,
    private commonfunc: CommonfunctionService,
    private toast: ToastService,
  ) { }

  ngOnInit() {
    this.initializeForm();
  }



  //------------------------------------------------------------------
  //------ register Form initialization
  //------------------------------------------------------------------
  initializeForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.compose(
        [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern(/^[a-zA-Z ]*$/)]
      )],
      phone: ['', Validators.compose(
        [Validators.required, Validators.minLength(10), Validators.maxLength(13), Validators.pattern(/^[0-9]*$/)]
      )],
      email: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(60), Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)])],
      password: [
        null, 
        Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])
      ],
      confirm_password: [
        '', 
        Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])
      ]
    }, {validator: this.checkPasswords });
  }



  checkPasswords(group: FormGroup) { 
    let pass = group.get('password').value;
    let confirmPass = group.get('confirm_password').value;
    return pass === confirmPass ? null : { notSame: true }     
  }



  //------------------------------------------------------------------
  //------ Submit register form
  //------------------------------------------------------------------
  onSubmit() {
    console.log('submit clicked....');    
    this.showLoader = true;

    if (this.registerForm.invalid) {
      this.commonfunc.getFormErrors(this.registerForm).then(async(data: any) => { 
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
