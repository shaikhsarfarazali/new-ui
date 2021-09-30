import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'offer',
    loadChildren: () => import('./offer/offer.module').then( m => m.OfferPageModule)
  },
  {
    path: 'document',
    loadChildren: () => import('./document/document.module').then( m => m.DocumentPageModule)
  },
  {
    path: 'fatca',
    loadChildren: () => import('./fatca/fatca.module').then( m => m.FatcaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'bankdetails',
    loadChildren: () => import('./bankdetails/bankdetails.module').then( m => m.BankdetailsPageModule)
  },
  {
    path: 'personaldetails',
    loadChildren: () => import('./personaldetails/personaldetails.module').then( m => m.PersonaldetailsPageModule)
  },
  {
    path: 'occupationdetails',
    loadChildren: () => import('./occupationdetails/occupationdetails.module').then( m => m.OccupationdetailsPageModule)
  },
  {
    path: 'review',
    loadChildren: () => import('./review/review.module').then( m => m.ReviewPageModule)
  },
  {
    path: 'income-proof',
    loadChildren: () => import('./income-proof/income-proof.module').then( m => m.IncomeProofPageModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./payments/payments.module').then( m => m.PaymentsPageModule)
  },

  {
    path: 'address',
    loadChildren: () => import('./address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'open-acc',
    loadChildren: () => import('./open-acc/open-acc.module').then( m => m.OpenAccPageModule)
  },
  {
    path: 'open-acc-for',
    loadChildren: () => import('./open-acc-for/open-acc-for.module').then( m => m.OpenAccForPageModule)
  },
  {
    path: 'open-acc-for-last',
    loadChildren: () => import('./open-acc-for-last/open-acc-for-last.module').then( m => m.OpenAccForLastPageModule)
  },
  {
    path: 'payment-mode',
    loadChildren: () => import('./payment-mode/payment-mode.module').then( m => m.PaymentModePageModule)
  },
  {
    path: 'fund-settlement',
    loadChildren: () => import('./fund-settlement/fund-settlement.module').then( m => m.FundSettlementPageModule)
  },
  {
    path: 'personal',
    loadChildren: () => import('./personal/personal.module').then( m => m.PersonalPageModule)
  },
  {
    path: 'review-test',
    loadChildren: () => import('./review-test/review-test.module').then( m => m.ReviewTestPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'cropper',
    loadChildren: () => import('./cropper/cropper.module').then( m => m.CropperPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
