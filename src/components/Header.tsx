import Logo from "../assets/logo.svg";
import SearchBar from "./Search";
import { BiGlobe, BiMenu, BiSolidUserCircle } from "react-icons/bi";

const Header = () => {
  return (
    <header className="py-4 border-b border-b-borderColor fixed inset-x-0 z-20 top-0 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="flex-1">
            <a href="#" className=" text-primary">
              <Logo />
            </a>
          </div>
          <div className="flex-1 flex justify-center">
            <SearchBar />
          </div>
          <div className="flex-1 flex items-center justify-end">
            <button className="px-4 py-3 text-black font-medium transition-all rounded-full hover:bg-[#f7f7f7]">
              Airbnb your home
            </button>
            <button className="px-4 py-3 text-black font-medium transition-all rounded-full hover:bg-[#f7f7f7]">
              <BiGlobe size={20} />
            </button>
            <button className="flex items-center border ml-2 border-borderColor rounded-full p-1 transition-all hover:shadow-md">
              <BiMenu size={20} className="mr-2 ml-1" />
              <BiSolidUserCircle size={32} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
