import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  isFormInvalid: boolean = false;
  otp = new FormGroup({

  });
  isSubmitted = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.otp = this.fb.group({
      otpno: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      mobile: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern('^[0-9]+$')]]
    });
  }

  get errorControl() {
    return this.otp.controls;
  }

  submitForm(ev) {
    this.isSubmitted = true;
    if (!this.otp.valid) {
      console.log(ev);
      return false;
    } 
    else{
      console.log(ev)
    }
    this.router.navigateByUrl('/personal');
  }
}
