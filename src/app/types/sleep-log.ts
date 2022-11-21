import { generate } from 'shortid';

export class SleepLog {
    public id?: string;
    public created: Date;

    constructor() {
        this.id = generate();
        this.created = new Date();
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