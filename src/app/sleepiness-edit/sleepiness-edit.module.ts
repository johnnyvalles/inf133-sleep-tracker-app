import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepinessEditPageRoutingModule } from './sleepiness-edit-routing.module';

import { SleepinessEditPage } from './sleepiness-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepinessEditPageRoutingModule
  ],
  declarations: [SleepinessEditPage]
})
export class SleepinessEditPageModule {}
