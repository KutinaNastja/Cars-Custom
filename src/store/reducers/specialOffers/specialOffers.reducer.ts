import { handleActions } from "redux-actions";
import { getType } from "typesafe-actions";

import { specialOffersActions } from "./specialOffers.actions";
import { SpecialOffersState } from "./specialOffers.model";

const initialState: SpecialOffersState = {
  isOpen: false,
};

const open = (state: SpecialOffersState): SpecialOffersState => ({
  ...state,
  isOpen: true,
});

const close = (state: SpecialOffersState): SpecialOffersState => ({
  ...state,
  isOpen: false,
});

const reducerMap: { [key: string]: any } = {
  [getType(specialOffersActions.open)]: open,
  [getType(specialOffersActions.close)]: close,
};

export const specialOffersReducer = handleActions(reducerMap, initialState);
