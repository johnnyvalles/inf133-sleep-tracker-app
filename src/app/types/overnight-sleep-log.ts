import { SleepLog } from "./sleep-log";
import { format, parseISO } from 'date-fns';

export class OvernightSleepLog extends SleepLog {
    private _sleepStart: string;
    private _sleepEnd: string;
    private _notes: string;

    constructor(sleepStart: string, sleepEnd: string, notes: string) {
        super();
        this._sleepStart = sleepStart;
        this._sleepEnd = sleepEnd;
        this._notes = notes;
    }

    // getters & setters
    set sleepStart(sleepStart: string) {
        this._sleepStart = sleepStart;
    }

    get sleepStart(): string {
        return this._sleepStart;
    }

    set sleepEnd(sleepEnd: string) {
        this._sleepEnd = sleepEnd;
    }

    get sleepEnd(): string {
        return this._sleepEnd;
    }

    set notes(notes: string) {
        this._notes = notes;
    }

    get notes(): string {
        return this._notes;
    }

    overnightSleepTitle(): string {
        return format(parseISO(this._sleepStart), 'MMMM d, yyyy');
    }

    overnightSleepSubtitle(): string {
        return format(parseISO(this._sleepStart), 'MM/dd/yyyy, hh:mm a');
    }

    overnightSleepStart(): string {
        return format(parseISO(this._sleepStart), "hh:mm a");
    }

    overnightSleepEnd(): string {
        return format(parseISO(this._sleepEnd), "hh:mm a");
    }

    sleepDurationMilli(): number {
        const startMs = new Date(this._sleepStart).getTime();
        const endMs = new Date(this._sleepEnd).getTime();
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
}