import Home from "./Home";
import { IHome } from "../types";
import useListing from "../hooks/useListing";

type GridListProps = {
  lists: IHome[];
};

const GridList = (props: GridListProps) => {
  const { handleToggleLike } = useListing();

  const { lists } = props;

  return (
    <div className="mb-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-6">
          {lists?.map((detail, index) => (
            <Home key={index} detail={detail} onLike={handleToggleLike} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridList;
