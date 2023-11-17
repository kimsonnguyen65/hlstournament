// utils/countdown.js
import { DateTime } from 'luxon';

export function calculateCountdown(timeZone) {
  const now = DateTime.now().setZone(timeZone);
  console.log(now)

//   return null
  const targetDateTime = now.set({
    hour: 19, // 7:00 PM
    minute: 0,
    second: 0,
  });

  // Calculate the difference between now and the target time
  const diff = targetDateTime.diff(now, ['minutes', 'seconds']).toObject();

  return {
    minutes: Math.floor(diff.minutes),
    seconds: Math.floor(diff.seconds),
  };
}