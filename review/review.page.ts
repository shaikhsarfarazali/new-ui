import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {
  camImg:any="../../assets/images/review/selfie.png";
  chequeImg:any="../../assets/images/review/cheque.png";
  signImg:any="../../assets/images/review/sign.png";
  selecetdFile : File;
  constructor() { }

  ngOnInit() {
  }
  fileEvent(ev,type) {
    this.selecetdFile = ev.target.files[0];

    if(type=="pic"){
    }else if(type=="cheque"){
    }else if(type=="sign"){

    }
    console.log(this.selecetdFile);
  }

}
