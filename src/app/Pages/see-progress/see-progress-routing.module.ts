import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeeProgressPage } from './see-progress.page';

const routes: Routes = [
  {
    path: '',
    component: SeeProgressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeeProgressPageRoutingModule {}
