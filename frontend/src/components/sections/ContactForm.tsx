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
    "w-full px-4 py-3 rounded-xl bg-[#0d3440] border border-[rgba(83,209,230,0.17)] text-[#edf9fb] placeholder:text-[#5aabb8] focus:outline-none focus:border-[#53d1e6] transition text-sm";

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
        className="w-full py-3 rounded-full bg-[#53d1e6] text-[#071e25] font-bold text-sm hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <div className="px-4 py-3 rounded-xl bg-[rgba(83,209,230,0.08)] border border-[rgba(83,209,230,0.25)] text-[#53d1e6] text-sm text-center">
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