// src/components/ui/SectionDivider.tsx

const SectionDivider = () => {
  return (
    <div className="relative h-24 overflow-hidden">
      <div className="absolute w-full h-12 bg-gradient-to-b from-transparent to-gray-100"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-[1px] bg-primary/30"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-[3px] bg-primary"></div>
    </div>
  );
};

export default SectionDivider;
