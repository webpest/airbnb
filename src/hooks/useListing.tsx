import { useAppSelector, useAppDispatch } from "../store/hooks";
import {
  listingSelector,
  filterSelector,
  setFilter,
  toggleLike,
} from "../store/listing";

const useListing = () => {
  const dispatch = useAppDispatch();
  const listings = useAppSelector(listingSelector);
  const filterBy = useAppSelector(filterSelector);

  const filteredListing = listings.filter((listing) => {
    if (filterBy === "") return true;
    return listing.tag === filterBy;
  });

  const handleFilter = (filter: string) => {
    dispatch(setFilter(filter));
  };

  const handleToggleLike = (id: string) => {
    dispatch(toggleLike(id));
  };

  return {
    filteredListing,
    filterBy,
    handleFilter,
    handleToggleLike,
  };
};

export default useListing;
