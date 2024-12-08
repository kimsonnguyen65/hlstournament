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

    const remainingMinutes = Math.max(0, Math.floor(diff.minutes || 0));
    const remainingSeconds = Math.max(0, Math.floor(diff.seconds || 0));

    return {
        minutes: remainingMinutes,
        seconds: remainingSeconds,
    };
}