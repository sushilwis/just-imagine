import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  // toastConfig: object = {
  //   timeOut: 4000,
  //   progressBar: true,
  // }

  constructor(public toastController: ToastController) { }

  async presentToast(header, message, color: string = "primary") {
    return await this.toastController.create({
      header,
      message,
      duration: 4000,
      position: 'top',
      color,
      showCloseButton: true 
    });
  }

}



// "primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", and "dark"
