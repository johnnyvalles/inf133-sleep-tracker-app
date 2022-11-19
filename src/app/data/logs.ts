import { OvernightSleepLog } from "../types/overnight-sleep-log";
import { SleepinessLog } from "../types/sleepiness-log";

const OVERNIGHT_SLEEP_LOGS: OvernightSleepLog[] = [
    new OvernightSleepLog(
        new Date('November 18, 2022 21:45:00'),
        new Date('November 19, 2022 07:03:00'),
        ""
    ),
    new OvernightSleepLog(
        new Date('November 19, 2022 19:32:00'),
        new Date('November 20, 2022 07:10:00'),
        "Feeling very well rested!"
    ),
    new OvernightSleepLog(
        new Date('November 20, 2022 23:32:00'),
        new Date('November 21, 2022 05:03:00'),
        "Feeling like I did not sleep at all..."
    )
];

const SLEEPINESS_LOGS: SleepinessLog[] = [
    new SleepinessLog(1, new Date('November 19, 2022 11:45:00')),
    new SleepinessLog(3, new Date('November 19, 2022 3:12:00')),
    new SleepinessLog(5, new Date('November 20, 2022 2:19:00')),
    new SleepinessLog(7, new Date('November 21, 2022 1:05:00'))
];

export {
    OVERNIGHT_SLEEP_LOGS,
    SLEEPINESS_LOGS
}