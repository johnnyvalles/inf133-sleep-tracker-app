import { Injectable } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { stringify } from 'querystring';
import { SleepinessLog } from '../types/sleepiness-log';
import { ToastController } from '@ionic/angular';


const SLEEPINESS_KEY: string = "sleepiness-logs";
const OVERNIGHT_KEY: string = "overnight-logs";


interface BasicSleepinessLog {
  id: string,
  date: string,
  sleepiness: number
}

@Injectable({
  providedIn: 'root'
})
export class SleepStorageService {

  constructor(
    private toastController: ToastController,
    private storage: Storage
  ) { 
    this.init();
  }

  async init() {
    this.storage = await this.storage.create();
    console.log("DB CREATED!");
  }

  // CREATE SleepinessLog
  async createSleepinessLog(sleepinessLog: SleepinessLog) {
    let log: BasicSleepinessLog = {
      id: sleepinessLog.id!,
      date: sleepinessLog.date!,
      sleepiness: sleepinessLog.sleepiness
    }

    let dbLogs = await this.storage.get(SLEEPINESS_KEY);
    if (!dbLogs) {
      await this.storage.set(SLEEPINESS_KEY, [log]);
    } else {
      dbLogs.unshift(log);
      let result = await this.storage.set(SLEEPINESS_KEY, dbLogs);
      if (result) {
        this.presentSuccessToast("Sleepiness log created.");
      }
    }
  }

  // DELETE SleepinessLog
  async deleteSleepinessLog(sleepinessLog: SleepinessLog) {
    let data = await this.storage.get(SLEEPINESS_KEY);
    if (data && data.length > 0) {
      await this.storage.set(SLEEPINESS_KEY, data.filter((item: { id: string | undefined; }) => { return item.id !== sleepinessLog.id }));
      this.presentSuccessToast("Sleepiness log deleted.");
    }
  }

  // UPDATE SleepinessLog
  async updateSleepinessLog(sleepinessLog: SleepinessLog, newDate: string, newSleepiness: number) {
    let data = await this.storage.get(SLEEPINESS_KEY);

    if (data && data.length > 0) {
      let index = data.findIndex((item: BasicSleepinessLog) => item.id === sleepinessLog.id);

      if (index !== -1) {
        data[index].date = newDate;
        data[index].sleepiness = newSleepiness;
        await this.storage.set(SLEEPINESS_KEY, data);
        this.presentSuccessToast("Sleepiness log updated.");
      }      
    }
  }

  // READ SleepinessLogs
  async getSleepinessLogs() {
    let result = await this.storage.get(SLEEPINESS_KEY);
    let sleepinessLogs: SleepinessLog[] = [];

    if (result) {
      result.forEach((item: any) => {
        let log = new SleepinessLog(item.date, item.sleepiness);
        log.id = item.id;
        sleepinessLogs.push(log);
      });
    }

    return sleepinessLogs;
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
}
