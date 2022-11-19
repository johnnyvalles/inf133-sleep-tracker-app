export class SleepLog {
    private _created: Date;

    constructor() {
        this._created = new Date();
    }

    get created(): Date { 
        return this._created; 
    }

    getCreatedString(): string {
        const locale = "en-US";
        const options = {
            weekday: "long",
            month: "long",
            day: "numeric"
        } as const;

        return this.created.toLocaleDateString(locale, options);
    }
}