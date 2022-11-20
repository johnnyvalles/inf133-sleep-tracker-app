import { Injectable } from '@angular/core';
import { OvernightSleepLog } from '../types/overnight-sleep-log';
import { SleepinessLog } from '../types/sleepiness-log';
import { OVERNIGHT_SLEEP_LOGS, SLEEPINESS_LOGS } from '../data/logs';

@Injectable({
  providedIn: 'root'
})
export class SleepService {
  public  overnightLogs: OvernightSleepLog[] = [];
	public  sleepinessLogs: SleepinessLog[] = [];

  constructor() {
    for (let log of OVERNIGHT_SLEEP_LOGS) {
      this.overnightLogs.push(log);
    }

    for (let log of SLEEPINESS_LOGS) {
      this.sleepinessLogs.push(log);
    }
  }
}
