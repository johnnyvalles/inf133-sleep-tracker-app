import { listenerCount } from "process";
import { SleepLog } from "./sleep-log";

export class SleepinessLog extends SleepLog {
    public static SCALE_DESCRIPTIONS = [
        undefined,
	    "Feeling active, vital, alert, or wide awake",                              // 1
	    "Functioning at high levels, but not at peak; able to concentrate",         // 2
	    "Awake, but relaxed; responsive but not fully alert",                       // 3
	    "Somewhat foggy, let down",                                                 // 4
	    "Foggy; losing interest in remaining awake; slowed down",                   // 5
	    "Sleepy, woozy, fighting sleep; prefer to lie down",                        // 6
	    "No longer fighting sleep, sleep onset soon; having dream-like thoughts"    // 7
    ] as const;

    private _sleepiness: number;
    private _sleepinessDate: Date;

    constructor(sleepiness: number, sleepinessDate: Date) {
        super();
        this._sleepiness = sleepiness;
        this._sleepinessDate = sleepinessDate;
    }

    get sleepiness(): number {
        return this._sleepiness;
    }

    set sleepiness(sleepiness: number) {
        this._sleepiness = sleepiness;
    }

    get sleepinessDate(): Date {
        return this._sleepinessDate;
    }

    set sleepinessDate(sleepinessDate: Date) {
        this._sleepinessDate = sleepinessDate;
    }

    get description(): string {
        return SleepinessLog.SCALE_DESCRIPTIONS[this._sleepiness]!; 
    }

    formattedSleepStartStrings(): string[] {
        const month: number = this._sleepinessDate.getMonth() + 1;
        const day: number = this._sleepinessDate.getDate();
        const year: number = this._sleepinessDate.getFullYear();
        let numerical = "";
        
        numerical += (month < 10 ? "0" + month : month);
        numerical += "/";
        numerical += (day < 10 ? "0" + day : day);
        numerical += "/";
        numerical += year;

        const options = {
            month: "long",
            day: "numeric",
            year: "numeric"
        } as const;

        const locale: string = "en-US";

        return [numerical, this._sleepinessDate.toLocaleString(locale, options)];
    }

    formattedSleepinessDate(): string {
        let str = "";
        let hours = this.sleepinessDate.getHours();
        let minutes = this.sleepinessDate.getMinutes();
        let suffix = hours >= 12 ? " PM" : " AM";
        hours = ((hours + 11) % 12 + 1);

        str += hours < 10 ? "0" + hours : hours;
        str += ":";
        str += minutes < 10 ? "0" + minutes : minutes;
        str += suffix;

        return str;
    }
}