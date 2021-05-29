import { useState } from "react";

export const Filters = () => {
  const [filterClicked, setFilterClicked] = useState(false);
  const handleClick = () => {
    setFilterClicked(!filterClicked);
  };
  return (
    <>
      <div className="grid grid-cols-12 mb-3 mt-0 text-gray-600 body-font sticky top-20 z-49">
        <button
          onClick={handleClick}
          className={`rounded-b-lg ${
            filterClicked
              ? "shadow-sm bg-indigo-100 scale-110"
              : "bg-indigo-50 scale-100"
          } border-0 py-1 px-3 focus:outline-none transition duration-100 ease-in-out hover:bg-indigo-100 transform hover:-translate-w-1 hover:scale-110`}
        >
          Filters
        </button>
      </div>
      {filterClicked && (
        <form action="" className="mb-3">
          <input type="checkbox" className="mr-3" />
          <label>Filter 1</label>
        </form>
      )}
    </>
  );
};

export default Filters;
