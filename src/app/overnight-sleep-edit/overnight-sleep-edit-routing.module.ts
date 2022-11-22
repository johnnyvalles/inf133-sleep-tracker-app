import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OvernightSleepEditPage } from './overnight-sleep-edit.page';

const routes: Routes = [
  {
    path: '',
    component: OvernightSleepEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OvernightSleepEditPageRoutingModule {}
