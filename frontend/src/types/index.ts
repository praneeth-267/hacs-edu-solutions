export type UserRole = "ADMIN" | "TEACHER" | "STUDENT";

export interface User {
  id: string;
  email: string;
  role: UserRole;
  profileCompleted: boolean;
  name?: string;
  age?: number;
  branch?: string;
  yearStudying?: string;
  contactInfo?: string;
  profileImageUrl?: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}
