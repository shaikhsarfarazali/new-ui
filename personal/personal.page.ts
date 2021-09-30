import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {
  isFormInvalid: boolean = false;
  personal = new FormGroup({

  });
  isSubmitted = false;
  emailreq: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.personal = this.fb.group({
      name: ['', [Validators.required]],
      pan:['', [Validators.required]],
      dob:['', [Validators.required]],
      acceptTerms: [false, [Validators.requiredTrue]]
    });
  }

  get errorControl() {
    return this.personal.controls;
  }

  submitForm(ev) {
    this.isSubmitted = true;
    if (!this.personal.valid) {
      console.log(ev)
      return false;
    } 
    else{
      console.log(ev)
    }
    this.router.navigate(['/offer']);
  }
}
