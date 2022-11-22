import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SleepinessPage } from './sleepiness.page';

import { SleepinessPageRoutingModule } from './sleepiness-routing.module';
import { SleepinessEditPageModule } from '../sleepiness-edit/sleepiness-edit.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SleepinessPageRoutingModule,
    SleepinessEditPageModule
  ],
  declarations: [SleepinessPage]
})
export class SleepinessPageModule {}
