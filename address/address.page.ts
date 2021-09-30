import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit{

  addressData:FormGroup;
  
  get address(){
    return this.addressData.get('address');
  }
  get pincode(){
    return this.addressData.get('pincode');
  }
  get state(){
    return this.addressData.get('state');
  }
  get city(){
    return this.addressData.get('city');
  }
  constructor(private fb:FormBuilder,  private toast: ToastController, private router: Router) { }

  ngOnInit(){
    this.addressData = this.fb.group({
      address:['',[Validators.required, Validators.minLength(8), Validators.pattern("^[a-zA-Z0-9\s,'-]*$")]],
      pincode:['',[Validators.required, Validators.minLength(6)]],
      state:['',[Validators.required, Validators.minLength(3)]],
      city:['',[Validators.required, Validators.minLength(3)]],
    })
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'Please fill the data before proceeding',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }
  checkForError(status,data){
    console.log(status)
    if(status){
      this.router.navigate(['/occupationdetails']);
    }if(data.address==''){
      this.presentToast();
    }
  }
}
