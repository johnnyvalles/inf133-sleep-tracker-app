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
}