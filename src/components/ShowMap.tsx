import { BiMapAlt, BiListUl } from "react-icons/bi";

type ShowMapProps = {
  showMap: boolean;
  setShowMap: (status: boolean) => void;
};

const ShowMap = ({ showMap, setShowMap }: ShowMapProps) => {
  return (
    <button
      className=" bg-black text-white font-semibold px-5 py-4 rounded-full fixed inset-x-0 bottom-24 w-max mx-auto flex items-center transition-all hover:scale-105 hover:shadow-sm"
      onClick={() => setShowMap(!showMap)}
    >
      {!showMap ? (
        <>
          Show map <BiMapAlt size={20} className="ml-2" />
        </>
      ) : (
        <>
          Show list <BiListUl size={20} className="ml-2" />
        </>
      )}
    </button>
  );
};

export default ShowMap;
