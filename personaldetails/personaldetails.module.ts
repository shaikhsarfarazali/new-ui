import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonaldetailsPageRoutingModule } from './personaldetails-routing.module';

import { PersonaldetailsPage } from './personaldetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonaldetailsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PersonaldetailsPage]
})
export class PersonaldetailsPageModule {}
