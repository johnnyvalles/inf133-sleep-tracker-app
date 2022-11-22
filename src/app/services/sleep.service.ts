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
  
  }

  deleteOvernightSleepLog(id: string): boolean {
    let index = this.overnightLogs.findIndex(log => log.id === id);
    if (index !== -1) {
      this.overnightLogs.splice(index, 1);
      return true;
    }
    return false;
  }

  deleteSleepinessLog(id: string): boolean {
    let index = this.sleepinessLogs.findIndex(log => log.id === id);
    if (index !== -1) {
      this.sleepinessLogs.splice(index, 1);
      return true;
    }
    return false;
  }

  // date is in ISO8601 format
  updateSleepinessLog(id: string, date: string, value: number): boolean {
    let index = this.sleepinessLogs.findIndex(log => log.id === id);
    if (index !== -1) {
      this.sleepinessLogs[index].sleepiness = value;
      this.sleepinessLogs[index].sleepinessDate = new Date(date);
      return true;
    }
    return false;
  }
}