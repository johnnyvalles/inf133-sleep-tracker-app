import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OvernightSleepPage } from './overnight-sleep.page';

import { OvernightSleepPageRoutingModule } from './overnight-sleep-routing.module';
import { OvernightSleepEditPageModule } from '../overnight-sleep-edit/overnight-sleep-edit.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    OvernightSleepPageRoutingModule,
    OvernightSleepEditPageModule
  ],
  declarations: [OvernightSleepPage]
})
export class OvernightSleepPageModule {}
