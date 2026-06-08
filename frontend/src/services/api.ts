import { ContactFormData, ContactFormValues, ApiResponse } from "../types/contact";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const submitContactForm = async (
  data: ContactFormData
): Promise<ApiResponse> => {
  const response = await fetch(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to submit. Please try again.");
  return response.json();
};

export const sendContactForm = async (
  data: ContactFormValues
): Promise<ApiResponse> => {
  const response = await fetch(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to submit. Please try again.");
  return response.json();
};