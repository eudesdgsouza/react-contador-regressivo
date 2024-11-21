import React, { useState } from 'react'
import InputForm from './components/InputForm'
import CountdownDisplay from './components/CountdownDisplay';
import Header from './components/Header';

const App: React.FC = () => {
  const [targetDate, setTargetDate] = useState<Date | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSetTargetDate = (date: Date) => {
    setTargetDate(date);
    setErrorMessage(null);
  };

  const handleCancel = () => {
    setTargetDate(null);
  };

  const handleError = (message: string) => {
    setErrorMessage(message);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-custom-gradient">

      <Header />

      <InputForm onSubmit={handleSetTargetDate} onCancel={handleCancel} onError={handleError} targetDate={targetDate} />

      {errorMessage && <p className="mt-2 text-2xl font-bold text-red-700">{errorMessage}</p>}

      {targetDate && <CountdownDisplay targetDate={targetDate} />}
    </div>
  )
}

export default App