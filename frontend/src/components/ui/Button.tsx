interface ButtonProps {
  label: string;
  variant?: "primary" | "outline";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({
  label,
  variant = "primary",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center px-7 py-3 rounded-full font-bold text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-[#53d1e6] text-[#071e25] hover:brightness-110",
    outline:
      "border border-[rgba(83,209,230,0.25)] text-[#a8d9e4] hover:bg-white/10",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]}`}
    >
      {label}
    </button>
  );
};

export default Button;