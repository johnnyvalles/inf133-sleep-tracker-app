import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepinessLog } from '../types/sleepiness-log';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sleepiness',
  templateUrl: 'sleepiness.page.html',
  styleUrls: ['sleepiness.page.scss']
})
export class SleepinessPage {
  public sleepinessValue: number = 1;
  public sleepinessDate: string = new Date().toISOString();

  constructor(
    public sleepService: SleepService,
    private toastController: ToastController
  ) {
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
    // Create date from ISO-8601 formats
    let log = new SleepinessLog(this.sleepinessValue, new Date(this.sleepinessDate));
    this.sleepService.sleepinessLogs.unshift(log);
    this.presentSuccessToast("Sleepiness log created.");
  }

  deleteSleepinessLog(id: string) {    
    if (this.sleepService.deleteSleepinessLog(id)) {
      this.presentSuccessToast("Overnight sleep log deleted.");
    } else {
      this.presentErrorToast("Cannot delete a non-existing log.");
    }
  }
}