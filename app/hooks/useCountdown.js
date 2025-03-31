"use client"
import { useState, useEffect } from 'react';
import { calculateCountdown } from '../utils/countdown';

export function useCountdown(hour, minute, second, timezone) {
  const [countdown, setCountdown] = useState(
    calculateCountdown(hour, minute, second, timezone)
  );

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const newCountdown = calculateCountdown(hour, minute, second, timezone);
      setCountdown(newCountdown);

      if (newCountdown.minutes <= 0 && newCountdown.seconds <= 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [hour, minute, second, timezone]);

  return countdown;
}