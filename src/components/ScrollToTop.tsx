import { scrollToTop } from "utils";

const ScrollToTop = () => {
  return (
    // @@todo: make button sticky
    <div className="fixed right-10 z-50">
      <button
        className="animate-bounce focus:outline-none"
        onClick={scrollToTop}
      >
        <svg
          className="w-10 h-10 text-amber-900 transform rotate-180"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
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
