import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document',
  templateUrl: './document.page.html',
  styleUrls: ['./document.page.scss'],
})
export class DocumentPage implements OnInit {

  camImg: any;
  signImg: any;
  chequeImg: any;
  defProfile: any = "../../assets/images/selfie.png";
  defCheq: any = "../../assets/images/cheque.png";
  defsign: any = "../../assets/images/sign.png";
  url: any;

  constructor(private notifyService : NotificationService, private router:Router) { }

  ngOnInit() {
  }

  fileEvent(ev: any, type) {
    let file = ev.target.files[0];
    if(file){
      let reader: FileReader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.url = reader.result as string;
        if (type == "pic") {
          this.camImg = this.url;
        } else if (type == "cheque") {
          this.chequeImg = this.url
        } else if (type == "sign") {
          this.signImg = this.url
        }
      }
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }
  }

  checkForError() {
    if(this.camImg && this.signImg && this.chequeImg){
      this.router.navigate(['/fatca']);
      // console.log(this.camImg, this.signImg, this.chequeImg);
    }else{
      this.notifyService.message('Please upload all images');
    }
  }

}
