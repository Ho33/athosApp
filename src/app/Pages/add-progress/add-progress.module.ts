import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProgressPageRoutingModule } from './add-progress-routing.module';

import { AddProgressPage } from './add-progress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProgressPageRoutingModule
  ],
  declarations: [AddProgressPage]
})
export class AddProgressPageModule {}
