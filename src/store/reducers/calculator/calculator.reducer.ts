import { Action, handleActions } from "redux-actions";
import { getType } from "typesafe-actions";

import { calculatorActions } from "./calculator.actions";
import { AddToCartParams, CalculatorState } from "./calculator.model";

const initialState: CalculatorState = {
  isNewCar: true,
  isOpenDescription: false,
  cart: [
    {
      id: 1,
      title: "Тонировка стекол",
      priceNewCar: 10,
      priceOldCar: 5,
      text: "Только что купили автомобиль и он не затонирован? Или просто устали от солнцепека и любопытных глаз? За 1.5 выполним тонировку автомобиля и предоставим бессрочную гарантию на работу и пленку.",
    },
    {
      id: 2,
      title: "Полировка кузова",
      priceNewCar: 10,
      priceOldCar: 5,
      text: "При полировке кузова снимается часть поврежденного лакового слоя, что позволяет придать автомобилю блеск, будто он только выехал из салона, а если вы хотите сохранить автомобиль в таком состоянии минимум на 2 года, рекомендуем покрыть кузов керамическим составом.",
    },
  ],
};
const setIsNewCar = (state: CalculatorState, action: Action<boolean>): CalculatorState => ({
  ...state,
  isNewCar: action.payload,
});

const open = (state: CalculatorState): CalculatorState => ({
  ...state,
  isOpenDescription: true,
});

const close = (state: CalculatorState): CalculatorState => ({
  ...state,
  isOpenDescription: false,
});

const push = (state: CalculatorState, action: Action<AddToCartParams>): CalculatorState => ({
  ...state,
  cart: [...state.cart, action.payload.service],
});

const remove = (state: CalculatorState, action: Action<AddToCartParams>): CalculatorState => ({
  ...state,
  cart: state.cart.filter((v) => v.id !== action.payload.service.id),
});

const reducerMap: { [key: string]: any } = {
  [getType(calculatorActions.setIsNewCar)]: setIsNewCar,
  [getType(calculatorActions.push)]: push,
  [getType(calculatorActions.remove)]: remove,
  [getType(calculatorActions.open)]: open,
  [getType(calculatorActions.close)]: close,
};

export const CalculatorReducer = handleActions(reducerMap, initialState);
