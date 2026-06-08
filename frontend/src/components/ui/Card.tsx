import { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
}

const Card = ({ title, children }: CardProps) => {
  return (
    <div className="bg-[#0a2b34] border border-[rgba(83,209,230,0.17)] rounded-2xl p-6 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(83,209,230,0.1)] transition-all duration-200">
      <h3 className="font-display text-lg text-[#edf9fb] uppercase tracking-wide leading-tight">
        {title}
      </h3>
      <div className="text-[#a8d9e4] text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default Card;