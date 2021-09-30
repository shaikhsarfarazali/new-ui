import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FundSettlementPageRoutingModule } from './fund-settlement-routing.module';

import { FundSettlementPage } from './fund-settlement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FundSettlementPageRoutingModule
  ],
  declarations: [FundSettlementPage]
})
export class FundSettlementPageModule {}
