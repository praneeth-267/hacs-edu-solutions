export const mailerConfig = {
  host: process.env.MAIL_HOST || "smtp.example.com",
  port: Number(process.env.MAIL_PORT || 587),
  auth: {
    user: process.env.MAIL_USER || "",
    pass: process.env.MAIL_PASS || ""
  }
};
