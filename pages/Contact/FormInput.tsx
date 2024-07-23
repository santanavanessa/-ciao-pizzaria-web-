import React, { useState, useEffect } from "react";

interface FormInputProps {
  id: number;
  name: string;
  type: string;
  required: boolean;
  label: string;
  errorMessage?: string;
  pattern?: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  minLength?: number;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  errorMessage,
  onChange,
  id,
  value,
  pattern,
  minLength,
  ...inputProps
}) => {
  const [focused, setFocused] = useState(false);
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (touched) {
      validate();
    }
  }, [value, touched]);

  const validate = () => {
    let errorMsg = '';
    if (minLength && value.length < minLength) {
      errorMsg = `O campo deve ter no mínimo ${minLength} caracteres`;
    } else if (pattern && !new RegExp(pattern).test(value)) {
      errorMsg = errorMessage || 'Campo inválido';
    }
    setError(errorMsg);
  };

  const handleFocus = () => {
    setFocused(true);
    setTouched(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e);
    setTouched(true); // Ensure that validation runs after user input
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      {inputProps.type === 'textarea' ? (
        <textarea
          {...inputProps}
          value={value}
          onChange={handleChange}
          onBlur={handleFocus}
        />
      ) : (
        <input
          {...inputProps}
          value={value}
          onChange={handleChange}
          onBlur={handleFocus}
          focused={focused.toString()}
        />
      )}
      {touched && error && <span>{error}</span>}
    </div>
  );
};

export default FormInput;
