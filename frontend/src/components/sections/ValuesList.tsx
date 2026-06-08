import { coreValues } from "../../constants/values";

const ValuesList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {coreValues.map((value) => (
        <div
          key={value.title}
          className="bg-[#0a2b34] border border-[rgba(83,209,230,0.17)] rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:border-[#53d1e6] hover:bg-[rgba(83,209,230,0.05)] transition-all duration-200"
        >
          <span className="text-4xl">{value.icon}</span>
          <h3 className="font-display text-base text-[#edf9fb] uppercase tracking-wide">
            {value.title}
          </h3>
          <p className="text-[#a8d9e4] text-xs leading-relaxed">
            {value.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ValuesList;