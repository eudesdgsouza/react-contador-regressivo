import React from 'react';
import CountdownUnit from './CountdownUnit';
import { TimeLeft } from '../types/shared';
import useCountdownTimer from '../hooks/useCountdownTimer';

interface CountdownDisplayProps {
  targetDate: Date | null;
}

const CountdownDisplay: React.FC<CountdownDisplayProps> = ({ targetDate }) => {
  const timeLeft: TimeLeft = useCountdownTimer(targetDate);

  if (!timeLeft || timeLeft.total <= 0) {
    return <p aria-live="assertive">A contagem regressiva acabou!</p>;
  }

  return (
    <div className="flex flex-row flex-wrap items-center gap-1 mt-10 md:gap-2 justify-evenly"
      aria-live="polite"
      aria-atomic="true"
    >
      <CountdownUnit value={timeLeft.days} label="Dias" />
      <CountdownUnit value={timeLeft.hours} label="Horas" />
      <CountdownUnit value={timeLeft.minutes} label="Minutos" />
      <CountdownUnit value={timeLeft.seconds} label="Segundos" />
    </div>
  );
};

export default CountdownDisplay;










































































// import React, { useEffect, useState } from 'react';
// import CountdownUnit from './CountdownUnit';
// import { calculateTimeLeft } from '../utils/time';
// import { TimeLeft } from '../types/shared';
// import useCountdownTimer from '../hooks/useCountdownTimer';

// interface CountdownDisplayProps {
//   targetDate: Date | null;
// }

// const CountdownDisplay: React.FC<CountdownDisplayProps> = ({ targetDate }) => {

//   // const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
//   //   { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 }
//   // );
//   // // const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

//   // useEffect(() => {
//   //   if (targetDate) {
//   //     const timer = setInterval(() => {
//   //       setTimeLeft(calculateTimeLeft(targetDate));
//   //     }, 1000);

//   //     return () => clearInterval(timer);
//   //   } else {
//   //     setTimeLeft({ total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
//   //   }
//   // }, [targetDate]);

//   const timeLeft: TimeLeft = useCountdownTimer(targetDate);


//   if (!timeLeft || timeLeft.total <= 0) {
//     return <p>This countdown is over! What's next on your adventure?</p>;
//   }

//   return (
//     <div className="flex flex-row flex-wrap items-center gap-2 mt-10">
//       <CountdownUnit value={timeLeft.days} label="Days" />
//       <CountdownUnit value={timeLeft.hours} label="Hours" />
//       <CountdownUnit value={timeLeft.minutes} label="Minutes" />
//       <CountdownUnit value={timeLeft.seconds} label="Seconds" />
//     </div>
//   );
// };

// export default CountdownDisplay;
