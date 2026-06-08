interface SectionHeadProps {
  title: string;
  subtitle?: string;
}

const SectionHead = ({ title, subtitle }: SectionHeadProps) => {
  return (
    <div className="flex flex-col gap-3 max-w-3xl">
      <h2 className="font-display text-4xl md:text-5xl text-[#edf9fb] uppercase tracking-wide leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#a8d9e4] text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHead;