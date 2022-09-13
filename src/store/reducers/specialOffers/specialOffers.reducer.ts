import { handleActions } from "redux-actions";
import { getType } from "typesafe-actions";

import { specialOffersActions } from "./specialOffers.actions";
import { specialOffersState } from "./specialOffers.model";

const initialState: specialOffersState = {
  isOpen: false,
};

const open = (state: specialOffersState): specialOffersState => ({
  ...state,
  isOpen: true,
});

const close = (state: specialOffersState): specialOffersState => ({
  ...state,
  isOpen: false,
});

const reducerMap: { [key: string]: any } = {
  [getType(specialOffersActions.open)]: open,
  [getType(specialOffersActions.close)]: close,
};

export const navigationReducer = handleActions(reducerMap, initialState);
