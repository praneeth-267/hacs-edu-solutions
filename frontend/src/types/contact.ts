export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  institution: string;
  service: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}