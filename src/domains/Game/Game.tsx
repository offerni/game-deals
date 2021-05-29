import { IGameSearch } from "./types";

type Props = {
  game: IGameSearch;
};

const Game = (props: Props) => {
  const { game } = props;
  return (
    <>
      <div className="p-4 border-2 border-gray-100 rounded-lg lg:w-full transition duration-100 ease-in-out hover:bg-gray-100 transform hover:-translate-w-1 hover:scale-110">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <a
            href={`https://www.cheapshark.com/redirect?dealID=${game.cheapestDealId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="team"
              className="flex-shrink-0 rounded-lg w-48 h-48"
              src={game.thumb}
            />
          </a>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900 font-bold">
              <a
                href={`https://www.cheapshark.com/redirect?dealID=${game.cheapestDealId}`}
                target="_blank"
                rel="noreferrer"
              >
                {game.external}
              </a>
            </h2>
            <div className="grid grid-cols-1 grid-rows-1">
              <h3 className="text-gray-500 mb-3">Cheapest: ${game.cheapest}</h3>
              <button className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 focus:outline-none">
                More Details
                <svg
                  className="w-4 h-4 ml-2"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
