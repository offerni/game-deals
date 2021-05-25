const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    // @@todo: make button sticky
    <div className="fixed right-10">
      <button
        className="animate-bounce focus:outline-none"
        onClick={scrollToTop}
      >
        <svg
          className="w-10 h-10 text-amber-900 transform rotate-180"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTop;
