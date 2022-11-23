import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepinessLog } from '../types/sleepiness-log';
import { ModalController } from '@ionic/angular';
import { SleepinessEditPage } from '../sleepiness-edit/sleepiness-edit.page';
import { format, parseISO } from 'date-fns';
import { SleepStorageService } from '../services/sleep-storage.service';

@Component({
  selector: 'app-sleepiness',
  templateUrl: 'sleepiness.page.html',
  styleUrls: ['sleepiness.page.scss']
})
export class SleepinessPage {
  public sleepinessLogs: SleepinessLog[] = [];
  public sleepinessValue: number;
  public sleepinessDate: string;

  constructor(
    public sleepService: SleepService,
    public sleepStorageService: SleepStorageService,
    private modalController: ModalController,
  ) {
    this.sleepinessValue = 1;
    this.sleepinessDate = format(parseISO(new Date().toISOString()), "yyyy-LL-dd'T'HH:mm:'00'XXX");
  }

  async ngOnInit() {
    let data = await this.sleepStorageService.getSleepinessLogs();
    this.sleepinessLogs = data;
  }

  async onCreateLog() {
    let log = new SleepinessLog(this.sleepinessDate, this.sleepinessValue);
    await this.sleepStorageService.createSleepinessLog(log);
    let data = await this.sleepStorageService.getSleepinessLogs();
    this.sleepinessLogs = data;
  }

  async deleteSleepinessLog(sleepinessLog: SleepinessLog) {
    await this.sleepStorageService.deleteSleepinessLog(sleepinessLog);
    let data = await this.sleepStorageService.getSleepinessLogs();
    this.sleepinessLogs = data;
  }

  async showModal(log: SleepinessLog) {
    const modal = await this.modalController.create({
      component: SleepinessEditPage,
      componentProps: {
        sleepinessLog: log,
        updateParent: async () => {
          let data = await this.sleepStorageService.getSleepinessLogs();
          this.sleepinessLogs = data;
        }
      }
    });
    await modal.present();
  }
}