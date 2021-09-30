import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private toaster: ToastController) { }

  async message(msg){
    const toast = await this.toaster.create({
      message: msg,
      color:'danger',
      duration: 2000
    });
    toast.present();
  }
}
