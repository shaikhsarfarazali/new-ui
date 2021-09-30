import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-occupationdetails',
  templateUrl: './occupationdetails.page.html',
  styleUrls: ['./occupationdetails.page.scss'],
})
export class OccupationdetailsPage implements OnInit {
  occdetails = ['Occupation details','Occupation details2', 'Occupation details3'];
  isFormInvalid: boolean = false;
  occupation = new FormGroup({

  });
  isSubmitted = false;
  emailreq: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.occupation = this.fb.group({
      details: ['', [Validators.required]],
      annual: ['', [Validators.required]],
      net: ['', [Validators.required]],
      date: ['', [Validators.required]]
    });
  }

  get errorControl() {
    return this.occupation.controls;
  }

  submitForm(ev) {
    this.isSubmitted = true;
    if (!this.occupation.valid) {
      console.log(ev)
      let mobile = ev.mobile;
      if(mobile == "9511607251"){
        this.emailreq = false
      }
      else{
        this.emailreq = true
      }
      return false;
    } 
    this.router.navigate(['/review']);
  }
}
