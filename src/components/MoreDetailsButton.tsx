const MoreDetailsButton = () => {
  return (
    <button className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 focus:outline-none mt-2">
      More Details
      <svg
        className="w-4 h-4 ml-2 mb-0"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14"></path>
        <path d="M12 5l7 7-7 7"></path>
      </svg>
    </button>
  );
};

export default MoreDetailsButton;
