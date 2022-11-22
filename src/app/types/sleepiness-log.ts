import { SleepLog } from "./sleep-log";
import { format, parseISO } from 'date-fns';

export class SleepinessLog extends SleepLog {
    public static SCALE_DESCRIPTIONS = [
	    "Feeling active, vital, alert, or wide awake",                              // 1
	    "Functioning at high levels, but not at peak; able to concentrate",         // 2
	    "Awake, but relaxed; responsive but not fully alert",                       // 3
	    "Somewhat foggy, let down",                                                 // 4
	    "Foggy; losing interest in remaining awake; slowed down",                   // 5
	    "Sleepy, woozy, fighting sleep; prefer to lie down",                        // 6
	    "No longer fighting sleep, sleep onset soon; having dream-like thoughts"    // 7
    ] as const;

    private _sleepiness: number;
    // ISO 8601 string
    private _date: string;

    constructor(date: string, sleepiness: number) {
        super();
        this._sleepiness = sleepiness;
        this._date = date;
    }

    get date(): string {
        return this._date;
    }

    set date(date: string) {
        this._date = date;
    }

    get sleepiness(): number {
        return this._sleepiness;
    }

    set sleepiness(sleepiness: number) {
        this._sleepiness = sleepiness;
    }

    get description(): string {
        return SleepinessLog.SCALE_DESCRIPTIONS[this._sleepiness - 1];
    }

    sleepinessTitle(): string {
        return format(parseISO(this._date), 'MMMM d, yyyy');
    }

    sleepinessSubtitle(): string {
        return format(parseISO(this._date), 'MM/dd/yyyy, hh:mm a');
    }
}