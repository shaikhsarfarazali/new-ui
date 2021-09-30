import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OccupationdetailsPageRoutingModule } from './occupationdetails-routing.module';

import { OccupationdetailsPage } from './occupationdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OccupationdetailsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [OccupationdetailsPage]
})
export class OccupationdetailsPageModule {}
