import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 text-center px-4">
      <h1 className="font-display text-9xl text-[#53d1e6] leading-none">
        404
      </h1>
      <p className="text-[#a8d9e4] text-lg max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-7 py-3 rounded-full bg-[#53d1e6] text-[#071e25] font-bold text-sm hover:brightness-110 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}