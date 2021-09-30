import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncomeProofPageRoutingModule } from './income-proof-routing.module';

import { IncomeProofPage } from './income-proof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncomeProofPageRoutingModule
  ],
  declarations: [IncomeProofPage]
})
export class IncomeProofPageModule {}
