import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommonfunctionService {

  constructor() { }


  //------------------------------------------------------------------
  //------ Form error list
  //------------------------------------------------------------------
  getErrorText() {
    return {
      required: 'is required',
      minlength: `Minimum character required`,
      maxlength: `Maximum character allowed`,
      pattern: 'Invalid entry on',
      email: 'Please enter a valid'
    }
  }




  //------------------------------------------------------------------
  //------ getting error text object
  //------------------------------------------------------------------
  getErrorTexts(k,valu,key) {
    let errTexts = this.getErrorText();
    if(k == 'minlength' || k == 'maxlength') {
      return {
        fieldName: key,
        errorType: k,
        errorText: `${errTexts[k]} ${valu.requiredLength} on ${key.replace(/_/gi, ' ').toUpperCase()}`
      }                  
    } else if(k == 'required') {
      return {
        fieldName: key,
        errorType: k,
        errorText: `${key.replace(/_/gi, ' ').toUpperCase()} ${errTexts[k]}`
      }
    } else {                  
      return {
        fieldName: key,
        errorType: k,
        errorText: `${errTexts[k]} ${key.toUpperCase()}`
      }
    }
  }





  //------------------------------------------------------------------
  //------ Getting form Error array
  //------------------------------------------------------------------
  getFormErrors(Fields: FormGroup) {
    let allFields = Fields.controls;
    let size = Object.keys(allFields).length;
    var err = {};
    let errorArray = [];

    return new Promise((resolve, reject) => {
      Object.entries(allFields).forEach(
        ([key, value], index) => {
          
          if(value.errors){  
            Object.entries(value.errors).forEach(
              ([k, valu]) => {
                err = this.getErrorTexts(k,valu,key);         
                errorArray.push(err);
              }
            );
          }

          if(index+1 == size) {
            resolve(errorArray);
          }
          
        }
      );      
    });    
  }






}
