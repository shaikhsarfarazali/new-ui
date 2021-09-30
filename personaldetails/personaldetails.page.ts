import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.page.html',
  styleUrls: ['./personaldetails.page.scss'],
})
export class PersonaldetailsPage implements OnInit {
  isFormInvalid: boolean = false;
  personal = new FormGroup({

  });
  isSubmitted = false;
  emailreq: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.personal = this.fb.group({
      name: ['', [Validators.required]],
      email:['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      father:['', [Validators.required]],
      mother: ['', [Validators.required]]
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
    this.router.navigate(['/address']);
  }
}
