import { IHome } from "../types";
import Carousel from "./Carousel";
import { BiHeart, BiSolidStar, BiSolidHeart } from "react-icons/bi";

type HomeProps = {
  detail: IHome;
  onLike: (id: string) => void;
};

const Home = (props: HomeProps) => {
  const { detail, onLike } = props;
  return (
    <div className="flex flex-col">
      <div className="rounded-lg overflow-hidden relative">
        <button
          className="absolute z-10 right-4 top-4"
          onClick={() => onLike(detail.id)}
        >
          {detail.liked ? (
            <BiSolidHeart size={24} className="text-primary" />
          ) : (
            <BiHeart size={24} className="text-white" />
          )}
        </button>
        <Carousel slides={detail.images} height={284} />
      </div>
      <div className="flex flex-col mt-4">
        <div className="flex justify-between text-black">
          <h3 className="font-semibold text-base">{detail.name}</h3>
          <span className=" inline-flex items-center">
            <BiSolidStar /> <span>4.96</span>
          </span>
        </div>
        <div>Hosted by Abayomi</div>
        <div>Oct 18 - 23</div>
        <div className="text-black">
          <span className=" font-medium">$29 </span>night
        </div>
      </div>
    </div>
  );
};

export default Home;
