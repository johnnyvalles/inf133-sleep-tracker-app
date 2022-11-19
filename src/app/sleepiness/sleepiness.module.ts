import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SleepinessPage } from './sleepiness.page';

import { SleepinessPageRoutingModule } from './sleepiness-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SleepinessPageRoutingModule
  ],
  declarations: [SleepinessPage]
})
export class SleepinessPageModule {}
