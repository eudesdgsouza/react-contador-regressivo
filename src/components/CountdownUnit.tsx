/* eslint-disable react-refresh/only-export-components */
import React from 'react';

interface CountdownUnitProps {
  value: number;
  label: string;
}

const CountdownUnit: React.FC<CountdownUnitProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center justify-center h-24 text-2xl font-bold text-center w-28 rounded-3xl bg-gradient-to-tr from-fuchsia-500 to-sky-400 md:w-36 md:h-36 "
      aria-live="polite"
      aria-atomic="true"
    >
      <h1 className='text-3xl text-purple-200 md:text-4xl'>{value || 0}</h1>
      <h1 className='text-xl text-blue-200 md:text-3xl'>{label}</h1>
    </div>
  );
};

// export default CountdownUnit;
export default React.memo(CountdownUnit)


{/* <h1 className='text-[#DCD6F7] text-4xl'>{value || 0}</h1>
      <h1 className='text-[#A5B1E0] text-3xl'>{label}</h1> */}