import { useState } from "react";

interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function useContactForm(initialState: ContactFormState) {
  const [values, setValues] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof ContactFormState, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const reset = () => setValues(initialState);

  return { values, submitting, error, handleChange, setSubmitting, setError, reset };
}
