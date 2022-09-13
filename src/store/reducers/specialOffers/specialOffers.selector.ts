import { createSelector } from "reselect";

import { RootState } from "..";
import { NavigationState } from ".";

export const specialOffersSelector = (state: RootState): NavigationState => state.navigation;
export const getIsOpenSpecialOffers = createSelector(specialOffersSelector, (state) => state.isOpen);
