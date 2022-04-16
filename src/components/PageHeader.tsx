import Filters from "domains/Deal/Filters";
import { NavLink, useLocation } from "react-router-dom";
import { PATHS } from "utils";
import SearchBar from "./SearchBar";
import Toggle from "./Toggle";

type Props = {
  darkMode: boolean;
  handleDarkMode: () => void;
};

const PageHeader = (props: Props) => {
  const location = useLocation();
  return (
    <>
      <header className="body-font bg-primary dark:bg-primary-dark sticky top-0 z-50 flex gap-4 md:gap-2 p-5 flex-col md:flex-row items-center w-full">
        <div className="flex gap-2">
          <NavLink
            to={PATHS.deals}
            className="flex title-font font-medium items-center text-gray-900 gap-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6 text-white bg-primary rounded-full text-textPrimary dark:bg-primary-dark"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="text-xl font-bold text-textPrimary dark:text-textPrimary-dark">
              Deal Finder
            </span>
          </NavLink>
          <nav className="px-3 my-2 md:border-l md:border-gray-400	flex items-center text-base justify-center grow-0">
            <NavLink
              to={PATHS.deals}
              className="mr-5 text-textPrimary dark:text-textPrimary-dark hover:text-textPrimary-dark dark:hover:text-textPrimary"
            >
              Top Deals
            </NavLink>
            <NavLink
              to={PATHS.recent}
              className="mr-5 text-textPrimary dark:text-textPrimary-dark hover:text-textPrimary-dark dark:hover:text-textPrimary "
            >
              Recent Deals
            </NavLink>
            <NavLink
              to={PATHS.free}
              className="mr-5 text-textPrimary dark:text-textPrimary-dark hover:text-textPrimary-dark dark:hover:text-textPrimary "
            >
              Free Games
            </NavLink>
          </nav>
        </div>
        <div className="w-full sm:w-1/2">
          <SearchBar />
        </div>
        <div className="absolute right-0 sm:flex-1 sm:relative">
          <Toggle
            darkMode={props.darkMode}
            handleDarkMode={props.handleDarkMode}
          />
        </div>
      </header>
      {location.pathname !== PATHS.games && <Filters />}
    </>
  );
};

export default PageHeader;
