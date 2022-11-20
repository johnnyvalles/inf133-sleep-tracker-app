import { SleepLog } from "./sleep-log";

export class OvernightSleepLog extends SleepLog {
    private _sleepStart: Date;
    private _sleepEnd: Date;
    private _notes: string;

    constructor(sleepStart: Date, sleepEnd: Date, notes: string) {
        super();
        this._sleepStart = sleepStart;
        this._sleepEnd = sleepEnd;
        this._notes = notes;
    }

    // getters & setters
    set sleepStart(sleepStart: Date) {
        this._sleepStart = sleepStart;
    }

    get sleepStart(): Date {
        return this._sleepStart;
    }

    set sleepEnd(sleepEnd: Date) {
        this._sleepEnd = sleepEnd;
    }

    get sleepEnd(): Date {
        return this._sleepEnd;
    }

    set notes(notes: string) {
        this._notes = notes;
    }

    get notes(): string {
        return this._notes;
    }

    // utilities
    sleepDurationMilli(): number {
        // start time in milliseconds
        const startMs = this._sleepStart.getTime();
        // end time in milliseconds
        const endMs = this._sleepEnd.getTime();
        // end - start in milliseconds
        return endMs - startMs;
    }

    sleepDurationHoursMins(): number[] {
        const hours = Math.floor(this.sleepDurationMilli() / (1000 * 60 * 60));
        const minutes = Math.floor(this.sleepDurationMilli() / (1000 * 60) % 60);
        return [hours, minutes];
    }

    sleepDurationString(): string {
        const duration: number[] = this.sleepDurationHoursMins();
        let durationString: string = "";

        durationString += duration[0];
        if (duration[0] !== 1) {
            durationString += " hrs, ";
        } else {
            durationString += " hr, ";
        }

        durationString += duration[1];
        if (duration[1] !== 1) {
            durationString += " mins";
        } else {
            durationString += " min";
        }

        return durationString;
    }

    formattedSleepStartStrings(): string[] {
        const month: number = this._sleepStart.getMonth() + 1;
        const day: number = this._sleepStart.getDate();
        const year: number = this._sleepStart.getFullYear();
        let numerical = "";
        
        numerical += (month < 10 ? "0" + month : month);
        numerical += "/";
        numerical += (day < 10 ? "0" + day : day);
        numerical += "/";
        numerical += year;

        const options = {
            month: "short",
            day: "numeric",
            year: "numeric"
        } as const;

        const locale: string = "en-US";

        return [numerical, this._sleepStart.toLocaleString(locale, options)];
    }

    formattedSleepEndStrings(): string[] {
        const month: number = this._sleepEnd.getMonth() + 1;
        const day: number = this._sleepEnd.getDate();
        const year: number = this._sleepEnd.getFullYear();
        let numerical = "";
        
        numerical += (month < 10 ? "0" + month : month);
        numerical += "/";
        numerical += (day < 10 ? "0" + day : day);
        numerical += "/";
        numerical += year;

        const options = {
            month: "short",
            day: "numeric",
            year: "numeric"
        } as const;

        const locale: string = "en-US";

        return [numerical, this._sleepEnd.toLocaleString(locale, options)];
    }

    sleepStartDayOfWeek(): string {
        const options = {
            weekday: "long"
        } as const;
        const locale: string = "en-US";

        return this._sleepStart.toLocaleString(locale, options);
    }

    sleepEndDayOfWeek(): string {
        const options = {
            weekday: "long"
        } as const;
        const locale: string = "en-US";

        return this._sleepEnd.toLocaleString(locale, options);
    }

    sleepStartMonth(): string {
        const options = {
            month: "long"
        } as const;
        const locale: string = "en-US";

        return this._sleepStart.toLocaleString(locale, options);
    }

    sleepEndMonth(): string {
        const options = {
            month: "long"
        } as const;
        const locale: string = "en-US";

        return this._sleepEnd.toLocaleString(locale, options);
    }

    sleepStartYear(): string {
        return "" + this._sleepStart.getFullYear();
    }

    sleepEndYear(): string {
        return "" + this._sleepEnd.getFullYear();
    }

    sleepStartDay(): string {
        const options = {
            day: "numeric"
        } as const;
        const locale: string = "en-US";

        return this._sleepStart.toLocaleString(locale, options);
    }

    sleepEndDay(): string {
        const options = {
            day: "numeric"
        } as const;
        const locale: string = "en-US";

        return this._sleepEnd.toLocaleString(locale, options);
    }
}