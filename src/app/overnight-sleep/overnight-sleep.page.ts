import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepStorageService } from '../services/sleep-storage.service';
import { OvernightSleepLog } from '../types/overnight-sleep-log';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { OvernightSleepEditPage } from '../overnight-sleep-edit/overnight-sleep-edit.page';

@Component({
  selector: 'app-overnight-sleep',
  templateUrl: 'overnight-sleep.page.html',
  styleUrls: ['overnight-sleep.page.scss']
})
export class OvernightSleepPage {
  public overnightSleepLogs: OvernightSleepLog[] = [];
  public sleepStart: string; // ISO8601 string
  public sleepEnd: string;   // ISO8601 string
  public notes:string;

  constructor(
    private modalController: ModalController,
    public sleepService: SleepService,
    private sleepStorageService: SleepStorageService,
    private toastController: ToastController) {
      this.sleepStart = format(parseISO(new Date().toISOString()), "yyyy-LL-dd'T'HH:mm:'00'XXX");
      this.sleepEnd = format(parseISO(new Date().toISOString()), "yyyy-LL-dd'T'HH:mm:'00'XXX");
      this.notes = "";  
  }

  formReset() {
    this.sleepStart = format(parseISO(new Date().toISOString()), "yyyy-LL-dd'T'HH:mm:'00'XXX");
    this.sleepEnd = format(parseISO(new Date().toISOString()), "yyyy-LL-dd'T'HH:mm:'00'XXX");
    this.notes = "";
  }

  async ngOnInit() {
    let data = await this.sleepStorageService.getOvernightSleepLogs();
    this.overnightSleepLogs = data;
    console.log(this.overnightSleepLogs);
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

  async onCreateLog() {
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

    await this.sleepStorageService.createOvernightSleepLog(log);
    let data = await this.sleepStorageService.getOvernightSleepLogs();
    this.overnightSleepLogs = data;
    this.presentSuccessToast("Overnight sleep log created.");
    this.formReset();
  }

  async deleteOvernightSleepLog(sleepLog: OvernightSleepLog) {
    await this.sleepStorageService.deleteOvernightSleepLog(sleepLog);
    let data = await this.sleepStorageService.getOvernightSleepLogs();
    this.overnightSleepLogs = data;
  }

  async showModal(log: OvernightSleepLog) {
    const modal = await this.modalController.create({
      component: OvernightSleepEditPage,
      componentProps: {
        sleepLog: log,
        updateParent: async () => {
          let data = await this.sleepStorageService.getOvernightSleepLogs();
          this.overnightSleepLogs = data;
        }
      },
    });

    await modal.present();
  }
}