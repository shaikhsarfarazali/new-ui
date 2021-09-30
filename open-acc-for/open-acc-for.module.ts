import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenAccForPageRoutingModule } from './open-acc-for-routing.module';

import { OpenAccForPage } from './open-acc-for.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenAccForPageRoutingModule
  ],
  declarations: [OpenAccForPage]
})
export class OpenAccForPageModule {}
