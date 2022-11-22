import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepinessLog } from '../types/sleepiness-log';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { SleepinessEditPage } from '../sleepiness-edit/sleepiness-edit.page';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-sleepiness',
  templateUrl: 'sleepiness.page.html',
  styleUrls: ['sleepiness.page.scss']
})
export class SleepinessPage {
  public sleepinessValue: number;
  public sleepinessDate: string;

  constructor(
    public sleepService: SleepService,
    private toastController: ToastController,
    private modalController: ModalController
  ) {
    this.sleepinessValue = 1;
    // const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // const zonedTime = utcToZonedTime(date, zone);
    // this.sleepinessDate = (format(zonedTime, "yyyy-LL-dd'T'HH:mm:'00'XXX", { timeZone: zone }));
    this.sleepinessDate = format(parseISO(new Date().toISOString()), "yyyy-LL-dd'T'HH:mm:'00'XXX");
  }

  async showModal(log: SleepinessLog) {
    const modal = await this.modalController.create({
      component: SleepinessEditPage,
      componentProps: {
        sleepinessLog: log
      }
    });

    await modal.present();
  }

  async presentSuccessToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      icon: "checkmark-circle",
      position: "top",
      color: "success"
    });

    await toast.present();
  }

  async presentErrorToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      icon: "close-circle",
      position: "top",
      color: "danger"
    });

    await toast.present();
  }

  onCreateLog() {
    const log = new SleepinessLog(this.sleepinessDate, this.sleepinessValue);
    this.sleepService.sleepinessLogs.unshift(log);
    this.presentSuccessToast("Sleepiness log created.");
  }

  deleteSleepinessLog(id: string) {    
    if (this.sleepService.deleteSleepinessLog(id)) {
      this.presentSuccessToast("Sleepiness log deleted.");
    } else {
      this.presentErrorToast("Cannot delete a non-existing log.");
    }
  }
}