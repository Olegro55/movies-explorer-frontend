import { useState } from "react";

export function useForm(inputValues = {}) {
  const fields = Object.keys(inputValues);
  const [inputs, setInputs] = useState(inputValues);
  const [validationMessages, setValidationMessages] = useState(Object.fromEntries(fields.map((key) => [key, ""])));
  const isFormValid = Object.values(validationMessages).every(message => message === "");

  const handleInput = (e) => {
    setValidationMessages({
      ...validationMessages,
      [e.target.name]: e.target.validationMessage
    });
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  return { inputs, validationMessages, isFormValid, handleInput };
}