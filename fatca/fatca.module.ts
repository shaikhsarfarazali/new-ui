import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FatcaPageRoutingModule } from './fatca-routing.module';

import { FatcaPage } from './fatca.page';
import { FatcaPopComponent } from '../component/fatca-pop/fatca-pop.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FatcaPageRoutingModule,
    ReactiveFormsModule,
  ],
  entryComponents: [FatcaPopComponent],
  declarations: [FatcaPage, FatcaPopComponent]
})
export class FatcaPageModule {}
