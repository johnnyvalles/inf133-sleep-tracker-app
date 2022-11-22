import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SleepinessLog } from '../types/sleepiness-log';
import { SleepService } from '../services/sleep.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-sleepiness-edit',
  templateUrl: './sleepiness-edit.page.html',
  styleUrls: ['./sleepiness-edit.page.scss'],
})
export class SleepinessEditPage implements OnInit {
  @Input() sleepinessLog!: SleepinessLog;

  public sleepinessDate?: string;
  public sleepiness?: number;

  constructor(
    private modalController: ModalController,
    private sleepService: SleepService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.sleepinessDate = this.sleepinessLog.sleepinessDate.toISOString();
    this.sleepiness = this.sleepinessLog.sleepiness;
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

  async close() {
    await this.modalController.dismiss();
  }

  async confirm() {
    await this.modalController.dismiss();
    if (this.sleepService.updateSleepinessLog(this.sleepinessLog.id!, this.sleepinessDate!, this.sleepiness!)) {
      this.presentSuccessToast("Sleepiness log has been updated.");
    }
  }
}