import { createSelector } from "reselect";

import { RootState } from "..";
import { SpecialOffersState } from "./index";

export const specialOffersSelector = (state: RootState): SpecialOffersState => state.specialOffers;
export const getIsOpenSpecialOffers = createSelector(specialOffersSelector, (state) => state.isOpen);
