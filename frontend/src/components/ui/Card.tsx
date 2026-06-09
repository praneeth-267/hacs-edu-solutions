import { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
}

const Card = ({ title, children }: CardProps) => {
  return (
    <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-2xl p-6 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(30,58,95,0.08)] transition-all duration-200">
      <h3 className="font-display text-lg text-[#1A2E45] uppercase tracking-wide leading-tight">
        {title}
      </h3>
      <div className="text-[#4B5563] text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default Card;