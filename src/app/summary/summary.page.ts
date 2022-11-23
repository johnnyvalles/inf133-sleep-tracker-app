import { Component } from '@angular/core';
import { SleepStorageService } from '../services/sleep-storage.service';
import { SleepinessLog } from '../types/sleepiness-log';


@Component({
  selector: 'app-summary',
  templateUrl: 'summary.page.html',
  styleUrls: ['summary.page.scss']
})
export class SummaryPage {

  public overnightTotal: number = 0;
  public sleepinessTotal: number = 0;
  public averageDuration: string = "";
  public averageSleepiness: number = 0;
  public values = SleepinessLog.SCALE_DESCRIPTIONS;

  constructor(
    private sleepStorageService: SleepStorageService
  ) {}

  async ionViewDidEnter() {
    this.overnightTotal = 0;
    this.sleepinessTotal = 0;

    let data: any= await this.sleepStorageService.getOvernightSleepLogs();
    if (data) {
      this.overnightTotal = data.length;
      let duration = 0;
      for (let log of data) {
        duration += log.sleepDurationMilli();
      }  
      duration /= data.length;
      this.averageDuration = this.sleepDurationHoursMinsString(duration);
    }

    data = await this.sleepStorageService.getSleepinessLogs();
    if (data) {
      this.sleepinessTotal = data.length;

      let value = 0;
      for (let log of data) {
        value += log.sleepiness;
      }  
      value /= data.length;
  
      this.averageSleepiness = Math.floor(value);
    }
  }


  sleepDurationHoursMinsString(duration: number) {
    const hours = Math.floor(duration / (1000 * 60 * 60));
    const minutes = Math.floor(duration / (1000 * 60) % 60);

    let durationString: string = "";
    durationString += hours;
    if (hours !== 1) {
        durationString += " hrs, ";
    } else {
        durationString += " hr, ";
    }

    durationString += minutes;
    if (minutes !== 1) {
        durationString += " mins";
    } else {
        durationString += " min";
    }

    return durationString;
}
}
