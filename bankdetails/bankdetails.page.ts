import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bankdetails',
  templateUrl: './bankdetails.page.html',
  styleUrls: ['./bankdetails.page.scss'],
})
export class BankdetailsPage implements OnInit {
  isFormInvalid: boolean = false;
  bank = new FormGroup({

  });
  isSubmitted = false;
  emailreq: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.bank = this.fb.group({
      Accountno: ['', [Validators.required]],
      Accounttype:['', [Validators.required]],
      ifsc:['', [Validators.required]],
      bankname: ['', [Validators.required]],
      state:['', [Validators.required]],
      micrcode:['', [Validators.required]]
    });
  }

  get errorControl() {
    return this.bank.controls;
  }

  submitForm(ev) {
    this.isSubmitted = true;
    if (!this.bank.valid) {
      console.log(ev)
      return false;
    } 
    else{
      console.log(ev)
    }
    this.router.navigate(['/personaldetails']);
  }

}
