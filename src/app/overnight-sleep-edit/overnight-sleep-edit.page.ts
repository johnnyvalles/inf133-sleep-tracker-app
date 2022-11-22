import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { SleepService } from '../services/sleep.service';
import { OvernightSleepLog } from '../types/overnight-sleep-log';

@Component({
  selector: 'app-overnight-sleep-edit',
  templateUrl: './overnight-sleep-edit.page.html',
  styleUrls: ['./overnight-sleep-edit.page.scss'],
})
export class OvernightSleepEditPage implements OnInit {
  @Input() sleepLog!: OvernightSleepLog;

  public sleepStart?: string;
  public sleepEnd?: string;
  public notes?: string;

  constructor(
    private modalController: ModalController,
    private sleepService: SleepService,
    private toastController: ToastController
  ) {
  }

  ngOnInit() {
    this.sleepStart = this.sleepLog.sleepStart;
    this.sleepEnd = this.sleepLog.sleepEnd;
    this.notes = this.sleepLog.notes;
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

  async close() {
    await this.modalController.dismiss();
  }

  async confirm() {
    await this.modalController.dismiss();

    let start = new Date(this.sleepStart!);
    let end = new Date(this.sleepEnd!);

    if (start.getTime() == end.getTime()) {
      this.presentErrorToast("Start and end times cannot be the same.");
      return;
    }

    if (start > end) {
      this.presentErrorToast("Start time cannot be after end time.");
      return;
    }

    if (this.sleepService.updateOvernightSleepLog(this.sleepLog.id!, this.sleepStart!, this.sleepEnd!, this.notes!)) {
      this.presentSuccessToast("Sleepiness log has been updated.");
    }
  }
}
