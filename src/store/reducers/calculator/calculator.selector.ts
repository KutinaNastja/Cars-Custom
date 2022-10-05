import { createSelector } from "reselect";

import { RootState } from "..";
import { CalculatorState } from "./index";

export const calculatorSelector = (state: RootState): CalculatorState => state.calculator;
export const getCartSelector = createSelector(calculatorSelector, (state) => state.cart);
export const getIsNewCarSelector = createSelector(calculatorSelector, (state) => state.isNewCar);
export const getLists = createSelector(calculatorSelector, (state) => state.lists);
