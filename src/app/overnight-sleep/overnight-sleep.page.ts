import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { OvernightSleepLog } from '../types/overnight-sleep-log';
import { ToastController } from '@ionic/angular';
import { format, utcToZonedTime } from 'date-fns-tz';

@Component({
  selector: 'app-overnight-sleep',
  templateUrl: 'overnight-sleep.page.html',
  styleUrls: ['overnight-sleep.page.scss']
})
export class OvernightSleepPage implements OnInit {

  public sleepStart: string; // ISO8601 string
  public sleepEnd: string;   // ISO8601 string
  public notes:string = "";

  constructor(
    public sleepService: SleepService,
    private toastController: ToastController) {
      this.sleepStart = new Date().toISOString();
      this.sleepEnd = new Date().toISOString();
  }

  ngOnInit(): void {
    this.sleepStart = new Date().toISOString();
    this.sleepEnd = new Date().toISOString();
  }

  async presentLogCreatedToast() {
    const toast = await this.toastController.create({
      message: "Overnight sleep log created!",
      duration: 1500,
      icon: "checkmark-circle",
      position: "top"
    });

    await toast.present();
  }

  async presentLogCreationError(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      icon: "close-circle",
      position: "top"
    });

    await toast.present();
  }

  onCreateLog() {
    // Create date from ISO-8601 formats
    let start = new Date(this.sleepStart);
    let end = new Date(this.sleepEnd);

    if (start.getTime() == end.getTime()) {
      this.presentLogCreationError("Start and end times cannot be the same.");
      return;
    }

    if (start > end) {
      this.presentLogCreationError("Start time cannot be after end time.");
      return;
    }

    let log = new OvernightSleepLog(
      start,
      end,
      this.notes
    );

    this.sleepService.overnightLogs.unshift(log);
  }
}
