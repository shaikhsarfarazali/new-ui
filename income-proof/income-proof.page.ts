import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-income-proof',
  templateUrl: './income-proof.page.html',
  styleUrls: ['./income-proof.page.scss'],
})
export class IncomeProofPage implements OnInit {
  Statement= ['A/C Statement for last 1 months', 'A/C Statement for last 3 months', 'A/C Statement for last 6 months'];
  
  defImg:any="../../assets/images/sign.png";
  signPdf: any = "../../assets/images/cheque.png";
  signature:any;
  selecetdFile : File;
  type:boolean=false;
  url: any;
  constructor( private router:Router, private toast:ToastController ) { }

  ngOnInit() {
  }

  checkType(type){
    let docType = type.detail.value;
    if(docType == 'img'){
      this.type = true;
    }else{
      this.type = false;
    }
  }

  fileEvent(ev: any, type) {
    let file = ev.target.files[0];
    let reader: FileReader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      this.url = reader.result as string;
      this.signature = type=="pic"? this.url: this.signPdf;
    }
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  onSubmit(){
    if(!this.signature){
      this.presentToast();
    }else{
      this.router.navigate(['/open-acc-for']);
    }
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'Please upload Income Proof',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }

}
