import csrf from "csurf";
import { env } from "../config/env.js";

export const csrfMiddleware = csrf({
  cookie: {
    httpOnly: true,
    sameSite: "strict",
    secure: env.COOKIE_SECURE
  },
  ignoreMethods: ["GET", "HEAD", "OPTIONS"]
});
