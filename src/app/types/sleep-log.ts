import { generate } from 'shortid';

export class SleepLog {
    public id?: string;

    constructor() {
        this.id = generate();
    }
}