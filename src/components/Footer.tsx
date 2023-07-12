import { BiGlobe, BiSolidChevronUp, BiDollar } from "react-icons/bi";
const Footer = () => {
  return (
    <footer className="border-t bg-white border-t-borderColor py-3 fixed inset-x-0 bottom-0 z-30">
      <div className="container mx-auto">
        <div className="flex justify-between items-center text-sm">
          <ul className="flex space-x-4">
            <li>2023 AirBnb, Inc.</li>
            <li>
              <a href="#" className=" hover:underline">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className=" hover:underline">
                Sitemap
              </a>
            </li>
            <li>
              <a href="#" className=" hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className=" hover:underline">
                Your Privacy Choices
              </a>
            </li>
            <li>
              <a href="#" className=" hover:underline">
                Destination
              </a>
            </li>
          </ul>
          <ul className="flex space-x-4 font-medium text-black">
            <li className="flex items-center">
              <BiGlobe size={16} className="mr-1" />
              <a href="#" className=" hover:underline">
                English (US)
              </a>
            </li>
            <li className="flex items-center">
              <BiDollar size={16} />
              <a href="#" className=" hover:underline">
                USD
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className=" hover:underline">
                Support & resources
              </a>
              <BiSolidChevronUp size={20} className="ml-1" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
