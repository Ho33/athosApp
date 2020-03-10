import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeeProgressPageRoutingModule } from './see-progress-routing.module';

import { SeeProgressPage } from './see-progress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeeProgressPageRoutingModule
  ],
  declarations: [SeeProgressPage]
})
export class SeeProgressPageModule {}
