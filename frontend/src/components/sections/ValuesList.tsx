import { coreValues } from "../../constants/values";

const ValuesList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {coreValues.map((value) => (
        <div
          key={value.title}
          className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:border-[#1E3A5F] hover:bg-[rgba(30,58,95,0.05)] transition-all duration-200"
        >
          <span className="text-4xl">{value.icon}</span>
          <h3 className="font-display text-base text-[#1A2E45] uppercase tracking-wide">
            {value.title}
          </h3>
          <p className="text-[#4B5563] text-xs leading-relaxed">
            {value.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ValuesList;