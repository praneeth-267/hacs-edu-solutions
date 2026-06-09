import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 text-center px-4">
      <h1 className="font-display text-9xl text-[#1E3A5F] leading-none">
        404
      </h1>
      <p className="text-[#4B5563] text-lg max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-7 py-3 rounded-full bg-[#1E3A5F] text-[#FFFFFF] font-bold text-sm hover:brightness-110 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}