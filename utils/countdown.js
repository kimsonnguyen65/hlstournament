// utils/countdown.js
import { DateTime } from 'luxon';

export function calculateCountdown(hour, minute, second, timeZone) {
    const now = DateTime.now().setZone(timeZone);
    // console.log(now)
    // return null
    const targetDateTime = now.set({
        hour: hour,
        minute: minute,
        second: second,
    });

    // Calculate the difference between now and the target time
    const diff = targetDateTime.diff(now, ['minutes', 'seconds']).toObject();

    return {
        minutes: Math.floor(diff.minutes),
        seconds: Math.floor(diff.seconds),
    };
}