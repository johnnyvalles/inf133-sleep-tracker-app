import { Injectable } from '@angular/core';
import { OvernightSleepLog } from '../types/overnight-sleep-log';
import { SleepinessLog } from '../types/sleepiness-log';

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
      this.sleepinessLogs[index].date = date;
      return true;
    }
    return false;
  }

  // date is in ISO8601 format
  updateOvernightSleepLog(id: string, sleepStart: string, sleepEnd: string, notes: string): boolean {
    let index = this.overnightLogs.findIndex(log => log.id === id);
    
    if (index !== -1) {
      this.overnightLogs[index].sleepStart = sleepStart;
      this.overnightLogs[index].sleepEnd = sleepEnd;
      this.overnightLogs[index].notes = notes;
      return true;
    }
    return false;
  }
}