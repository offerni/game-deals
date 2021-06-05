type Props = {
  children: JSX.Element | JSX.Element[];
};

const Card = (props: Props) => {
  return (
    <div className="p-4 border-2 border-gray-100 dark:border-gray-700 rounded-lg lg:w-full transition duration-100 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700 transform hover:-translate-w-1 hover:scale-110 bg-white dark:bg-gray-800">
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        {props.children}
      </div>
    </div>
  );
};

export default Card;
