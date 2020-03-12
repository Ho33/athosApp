import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProgressPage } from './add-progress.page';

const routes: Routes = [
  {
    path: '',
    component: AddProgressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProgressPageRoutingModule {}
