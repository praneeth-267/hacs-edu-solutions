interface SectionHeadProps {
  title: string;
  subtitle?: string;
}

const SectionHead = ({ title, subtitle }: SectionHeadProps) => {
  return (
    <div className="flex flex-col gap-3 max-w-3xl">
      <h2 className="font-display text-4xl md:text-5xl text-[#1A2E45] uppercase tracking-wide leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#4B5563] text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHead;