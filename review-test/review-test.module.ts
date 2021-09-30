import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewTestPageRoutingModule } from './review-test-routing.module';

import { ReviewTestPage } from './review-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewTestPageRoutingModule
  ],
  declarations: [ReviewTestPage]
})
export class ReviewTestPageModule {}
