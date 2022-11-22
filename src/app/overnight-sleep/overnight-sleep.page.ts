import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { OvernightSleepLog } from '../types/overnight-sleep-log';
import { ToastController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-overnight-sleep',
  templateUrl: 'overnight-sleep.page.html',
  styleUrls: ['overnight-sleep.page.scss']
})
export class OvernightSleepPage {
  public sleepStart: string; // ISO8601 string
  public sleepEnd: string;   // ISO8601 string
  public notes:string;

  constructor(
    public sleepService: SleepService,
    private toastController: ToastController) {
      this.sleepStart = format(parseISO(new Date().toISOString()), "yyyy-LL-dd'T'HH:mm:'00'XXX");
      this.sleepEnd = format(parseISO(new Date().toISOString()), "yyyy-LL-dd'T'HH:mm:'00'XXX");
      this.notes = "";
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
    let start = new Date(this.sleepStart);
    let end = new Date(this.sleepEnd);

    if (start.getTime() == end.getTime()) {
      this.presentErrorToast("Start and end times cannot be the same.");
      return;
    }

    if (start > end) {
      this.presentErrorToast("Start time cannot be after end time.");
      return;
    }

    let log = new OvernightSleepLog(
      this.sleepStart,
      this.sleepEnd,
      this.notes
    );

    this.sleepService.overnightLogs.unshift(log);
    this.presentSuccessToast("Overnight sleep log created.");
  }

  deleteOvernightSleepLog(id: string) {    
    if (this.sleepService.deleteOvernightSleepLog(id)) {
      this.presentSuccessToast("Overnight sleep log deleted.");
    } else {
      this.presentErrorToast("Cannot delete a non-existing log.");
    }
  }
}