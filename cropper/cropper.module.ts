import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CropperPageRoutingModule } from './cropper-routing.module';

import { CropperPage } from './cropper.page';
import { ImageCropperModule } from '../image-cropper/image-cropper.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CropperPageRoutingModule,
    ImageCropperModule
  ],
  declarations: [CropperPage]
})
export class CropperPageModule {}
