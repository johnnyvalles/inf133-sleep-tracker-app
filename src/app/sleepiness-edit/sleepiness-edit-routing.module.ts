import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepinessEditPage } from './sleepiness-edit.page';

const routes: Routes = [
  {
    path: '',
    component: SleepinessEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepinessEditPageRoutingModule {}
