import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-test',
  templateUrl: './review-test.page.html',
  styleUrls: ['./review-test.page.scss'],
})
export class ReviewTestPage implements OnInit {

  currentDate:any=new Date().toISOString().substring(0,10);
  
  constructor() { }

  ngOnInit() {
  }

}
