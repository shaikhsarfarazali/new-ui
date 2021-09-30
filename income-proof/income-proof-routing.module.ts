import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncomeProofPage } from './income-proof.page';

const routes: Routes = [
  {
    path: '',
    component: IncomeProofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncomeProofPageRoutingModule {}
