type Props = {
  children: JSX.Element | JSX.Element[];
  logo: JSX.Element;
};

const cssTransition = `
  transition duration-100 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700 transform hover:-translate-w-1 hover:scale-110
`;

const Card = (props: Props) => {
  return (
    <div
      className={`h-full p-4 border-2 border-gray-100 dark:border-gray-700 rounded-lg w-full ${cssTransition} flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left gap-6`}
    >
      <div className="rounded-lg w-52 h-52 flex items-center border-2 border-gray dark:border-gray-400">
        {props.logo}
      </div>
      <div className="h-full w-full flex flex-col place-content-between gap-1">
        {props.children}
      </div>
    </div>
  );
};

export default Card;
