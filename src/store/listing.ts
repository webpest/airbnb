import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IHome } from "../types";
import { homeLists } from "../data";

export interface ListingState {
  listings: IHome[];
  filterBy: string;
}

const initialState: ListingState = {
  listings: homeLists,
  filterBy: "",
};

export const listingSlice = createSlice({
  name: "listings",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filterBy = action.payload;
    },
    toggleLike: (state, action: PayloadAction<string>) => {
      state.listings.forEach((home) => {
        return home.id === action.payload ? (home.liked = !home.liked) : home;
      });
    },
  },
});

export const { setFilter, toggleLike } = listingSlice.actions;

export const listingSelector = (state: RootState) => state.listing.listings;
export const filterSelector = (state: RootState) => state.listing.filterBy;

export default listingSlice.reducer;
