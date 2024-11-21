import React, { useState } from 'react';
import { validateTargetDate } from '../utils/time';

interface InputFormProps {
  onSubmit: (targetDate: Date) => void;
  onError: (message: string) => void;
  onCancel: () => void;
  targetDate: Date | null;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit, onCancel, onError, targetDate }) => {
  const [dateTime, setDateTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { isValid, error, targetDate } = validateTargetDate(dateTime);

    if (!isValid && error) {
      onError(error);
      return;
    }

    if (isValid && targetDate) {
      onSubmit(targetDate);
    }
  };

  const handleCancel = () => {
    setDateTime('');
    onCancel();
  };



  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        aria-label="Choose a target date and time"
        type="datetime-local"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
        className="p-2 text-white bg-transparent border rounded-md outline-none"
      />

      <div className="flex w-full gap-4">
        {!targetDate ?
          <button type="submit" className="w-full p-2 text-white border border-white rounded-md">
            Iniciar temporizador
          </button> :
          <button type="button" onClick={handleCancel} className="w-full p-2 text-white border border-white rounded-md">
            Cancelar temporizador
          </button>
        }
      </div>



    </form>
  );
};



export default InputForm;
