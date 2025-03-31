export function calculateCountdown(hour, minute, second, timezone) {
  const now = new Date();
  const target = new Date();
  target.setHours(hour, minute, second, 0);

  // Convert to target timezone
  const targetTime = new Date(target.toLocaleString('en-US', { timeZone: timezone }));

  // Calculate difference
  let diff = targetTime - now;

  // If the target time has passed for today, set it for tomorrow
  if (diff < 0) {
    targetTime.setDate(targetTime.getDate() + 1);
    diff = targetTime - now;
  }

  // Convert to minutes and seconds
  const minutes = Math.floor(diff / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  return {
    minutes,
    seconds
  };
}