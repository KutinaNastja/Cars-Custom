import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import { Action } from "redux-actions";

import { CalculatorReducer as calculator } from "./calculator";
import { specialOffersReducer as specialOffers } from "./specialOffers";

const stateReducer = combineReducers({
  specialOffers,
  calculator,
});

export const rootReducer = (state: any, action: Action<any>) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (state.count) nextState.count = state.count;
    return nextState;
  }
  return stateReducer(state, action);
};

export type RootState = ReturnType<typeof stateReducer>;
