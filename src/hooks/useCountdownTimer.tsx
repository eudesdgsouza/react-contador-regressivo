import { useState, useEffect } from 'react';
import { TimeLeft } from '../types/shared';

const useCountdownTimer = (targetDate: Date | null): TimeLeft => {

  const calculateTimeLeft = (): TimeLeft => {

    const now = new Date();
    const difference = (targetDate?.getTime() || 0) - now.getTime();

    if (difference <= 0) {
      return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      total: difference,
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    if (targetDate) {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setTimeLeft({ total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  }, [targetDate]);


  return timeLeft;
};

export default useCountdownTimer;
