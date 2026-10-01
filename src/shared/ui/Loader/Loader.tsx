const Loader = () => {
  return (
    <div data-testid="loader" className="flex items-center justify-center">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-[#34a798]/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-[#34a798] rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
