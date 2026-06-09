import { useState } from "react";
import type { FormEvent } from "react";
import { sendContactForm } from "../../services/api";
import type { ContactFormValues } from "../../types/contact";

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (field: keyof ContactFormValues, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus("idle");
    try {
      await sendContactForm(form);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#E5E7EB] text-[#4B5563] placeholder:text-[#B8860B] focus:outline-none focus:border-[#1E3A5F] transition text-sm";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Your Name"
          required
          className={inputClass}
        />
        <input
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="Email Address"
          required
          className={inputClass}
        />
      </div>
      <input
        value={form.subject}
        onChange={(e) => handleChange("subject", e.target.value)}
        placeholder="Subject"
        required
        className={inputClass}
      />
      <textarea
        value={form.message}
        onChange={(e) => handleChange("message", e.target.value)}
        placeholder="Your Message"
        required
        rows={6}
        className={`${inputClass} resize-none`}
      />

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3 rounded-full bg-[#1E3A5F] text-[#FFFFFF] font-bold text-sm hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <div className="px-4 py-3 rounded-xl bg-[rgba(30,58,95,0.08)] border border-[rgba(30,58,95,0.25)] text-[#1E3A5F] text-sm text-center">
          ✅ Message sent! We'll be in touch soon.
        </div>
      )}
      {status === "error" && (
        <div className="px-4 py-3 rounded-xl bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.25)] text-red-400 text-sm text-center">
          ❌ Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
}