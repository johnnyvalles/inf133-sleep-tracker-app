import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SleepinessLog } from '../types/sleepiness-log';
import { SleepStorageService } from '../services/sleep-storage.service';

@Component({
  selector: 'app-sleepiness-edit',
  templateUrl: './sleepiness-edit.page.html',
  styleUrls: ['./sleepiness-edit.page.scss'],
})
export class SleepinessEditPage implements OnInit {
  @Input() sleepinessLog!: SleepinessLog;
  @Input() updateParent: any;

  public sleepinessDate?: string;
  public sleepiness?: number;

  constructor(
    private modalController: ModalController,
    private sleepStorageService: SleepStorageService,
  ) {
  }

  ngOnInit() {
    this.sleepinessDate = this.sleepinessLog.date;
    this.sleepiness = this.sleepinessLog.sleepiness;
  }

  async close() {
    await this.modalController.dismiss();
  }

  async confirm() {
    await this.modalController.dismiss();
    await this.sleepStorageService.updateSleepinessLog(this.sleepinessLog, this.sleepinessDate!, this.sleepiness!);
    await this.updateParent();
  }
}