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

    get sleepStart(): Date {
        return this._sleepStart;
    }

    set sleepStart(sleepStart: Date) {
        this._sleepStart = sleepStart;
    }

    get sleepEnd(): Date {
        return this._sleepEnd;
    }

    set sleepEnd(sleepEnd: Date) {
        this._sleepEnd = sleepEnd;
    }

    get notes(): string {
        return this._notes;
    }

    set notes(notes: string) {
        this._notes = notes;
    }

    timeSleptMilliseconds(): number {
        // start time in milliseconds
        const startMs = this._sleepStart.getTime();
        // end time in milliseconds
        const endMs = this._sleepEnd.getTime();
        // end - start in milliseconds
        return endMs - startMs;
    }

    get summaryString(): string {
        const diffMs = this.timeSleptMilliseconds();
        return Math.floor(diffMs / (1000*60*60)) + " hours, " + Math.floor(diffMs / (1000*60) % 60) + " minutes.";
    }

    get sleepDuration(): number[] {
        const hours = Math.floor(this.timeSleptMilliseconds() / (1000*60*60));
        const minutes = Math.floor(this.timeSleptMilliseconds() / (1000*60) % 60);
        return [hours, minutes];
    }
}