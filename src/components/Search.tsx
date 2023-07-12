import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className=" border border-borderColor rounded-full p-2 flex items-center shadow-md transition-all hover:shadow-lg">
      <ul className="flex space-x-6 font-medium justify-between flex-1 mx-2 text-black">
        <li>Anywhere</li>
        <li>Any week</li>
        <li className=" text-grey">Add guests</li>
      </ul>
      <button className=" bg-primary h-8 w-8 rounded-full ml-auto text-white inline-flex items-center justify-center">
        <BiSearch />
      </button>
    </div>
  );
};

export default SearchBar;
