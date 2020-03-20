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
  formErrors: any = [];

  constructor(
    // private router: Router, 
    // private data: DataService,
    private formBuilder: FormBuilder,
    private commonfunc: CommonfunctionService,
    private toast: ToastService,
  ) { }



  ngOnInit() {
    this.formErrors = [];
    this.initializeForm();
  }



  //------------------------------------------------------------------
  //------ register Form initialization
  //------------------------------------------------------------------
  initializeForm() {
    this.registerForm = this.formBuilder.group({
      name: [
        '', 
        Validators.compose(
        [Validators.required, Validators.minLength(2), Validators.maxLength(40), Validators.pattern(/^[a-zA-Z ]*$/)]
      )],
      phone: [
        '', 
        Validators.compose(
        [Validators.required, Validators.minLength(10), Validators.maxLength(13), Validators.pattern(/^[0-9]*$/)]
      )],
      email: [
        null, 
        Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(60), Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)])
      ],
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


  //------------------------------------------------------------------
  //------ checking for both password same
  //------------------------------------------------------------------
  async checkPasswords(group: FormGroup) { 
    let pass = group.get('password').value;
    let confirmPass = group.get('confirm_password').value;
    // return pass === confirmPass ? null : { notSame: true }  
    if(pass === confirmPass){
      return null;
    }else{      
      return { notSame: true };
    }   
  }



  //------------------------------------------------------------------
  //------ Submit register form
  //------------------------------------------------------------------
  onSubmit() {
    // console.log('submit clicked....');    
    console.log('submit clicked....',this.registerForm.hasError);    
    this.showLoader = true;

    if (this.registerForm.invalid) {
      this.commonfunc.getFormErrors(this.registerForm).then(async(data: any) => { 
        console.log('form errors : >>>>>>>>>>', data);
        // this.formErrors = data;
        if(data && data.length > 0) {
          let toast = await this.toast.presentToast('Info!', data[0].errorText, "danger"); 
          toast.present();
        } else{
          let toast = await this.toast.presentToast('Info!', 'Password Not Match', "danger"); 
          toast.present();
        } 

      }).catch(err=> {
        console.log(err);        
      }); 
      
      this.showLoader = false;
      return;
    }
  }




  //------------------------------------------------------------------
  //------ name filter method
  //------------------------------------------------------------------
  onNameType(e){
    let modifiedName = e.target.value.replace(/[\d+`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    // console.log('name typed...............', modifiedName);        
    e.target.value = modifiedName.toLowerCase().split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
    
    this.registerForm.patchValue({
      name: modifiedName.toLowerCase().split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ')
    });
  }





  //------------------------------------------------------------------
  //------ Mobile number filter method
  //------------------------------------------------------------------
  onMobileNumberType(e) {
    let num = e.target.value.match(/\d/g);
    if(num == null){
      e.target.value = '';
      this.registerForm.patchValue({
        phone: ''
      });
    }else{
      num = num.join("");
      num = num.toString();
      let trim = num.substring(0, 13);     
      e.target.value = trim;
      // console.log(trim);      
      this.registerForm.patchValue({
        phone: trim
      });
    }      
  }





  //------------------------------------------------------------------
  //------ going to login page
  //------------------------------------------------------------------
  gotoLoginPage(){
    this.commonfunc.goToForward("/main/auth/login");
  }



}
