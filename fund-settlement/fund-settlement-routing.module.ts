import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FundSettlementPage } from './fund-settlement.page';

const routes: Routes = [
  {
    path: '',
    component: FundSettlementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FundSettlementPageRoutingModule {}
