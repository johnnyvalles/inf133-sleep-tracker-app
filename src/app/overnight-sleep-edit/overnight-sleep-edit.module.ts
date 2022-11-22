import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OvernightSleepEditPageRoutingModule } from './overnight-sleep-edit-routing.module';

import { OvernightSleepEditPage } from './overnight-sleep-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OvernightSleepEditPageRoutingModule
  ],
  declarations: [OvernightSleepEditPage]
})
export class OvernightSleepEditPageModule {}
