import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toastConfig: object = {
    timeOut: 4000,
    progressBar: true,
  }

  constructor(public toastController: ToastController) { }


  async presentToast(header, message, color, duration) {
    return await this.toastController.create({
      header,
      message,
      duration,
      position: 'top',
      color 
    });
  }
  
}
