import { Action, handleActions } from "redux-actions";
import { getType } from "typesafe-actions";

import { calculatorActions } from "./calculator.actions";
import { AddToCartParams, CalculatorState, Service } from "./calculator.model";
import { getSumItemsCart } from "./calculator.util";

const initialState: CalculatorState = {
  isNewCar: true,
  lists: {},
  cart: [
    {
      id: 1,
      title: "Тонировка стекол",
      price: 5,
      text: "Только что купили автомобиль и он не затонирован? Или просто устали от солнцепека и любопытных глаз? За 1.5 выполним тонировку автомобиля и предоставим бессрочную гарантию на работу и пленку.",
    },
    {
      id: 2,
      title: "Полировка кузова",
      price: 5,
      text: "При полировке кузова снимается часть поврежденного лакового слоя, что позволяет придать автомобилю блеск, будто он только выехал из салона, а если вы хотите сохранить автомобиль в таком состоянии минимум на 2 года, рекомендуем покрыть кузов керамическим составом.",
    },
  ],
  sum: 0,
};

const setIsNewCar = (state: CalculatorState, action: Action<boolean>): CalculatorState => {
  const isNewCar = action.payload;
  const sum = getSumItemsCart({ cart: state.cart, isNewCar });
  return {
    ...state,
    isNewCar,
    sum,
  };
};

const open = (state: CalculatorState, action: Action<{ i: number }>): CalculatorState => ({
  ...state,
  lists: { ...state.lists, [action.payload.i]: true },
});

const close = (state: CalculatorState, action: Action<{ i: number }>): CalculatorState => ({
  ...state,
  lists: { ...state.lists, [action.payload.i]: false },
});

const push = (state: CalculatorState, action: Action<AddToCartParams>): CalculatorState => {
  const cart = [...state.cart, action.payload.service];
  const sum = getSumItemsCart({ cart, isNewCar: state.isNewCar });
  return {
    ...state,
    cart,
    sum,
  };
};

const remove = (state: CalculatorState, action: Action<AddToCartParams>): CalculatorState => {
  const cart = state.cart.filter((v) => v.id !== action.payload.service.id);
  const sum = getSumItemsCart({ cart, isNewCar: state.isNewCar });
  return {
    ...state,
    cart,
    sum,
  };
};

const countItemsCart = (state: CalculatorState, action: Action<AddToCartParams>): CalculatorState => {
  const sum = getSumItemsCart({ cart: state.cart, isNewCar: state.isNewCar });
  return {
    ...state,
    sum,
  };
};

const reducerMap: { [key: string]: any } = {
  [getType(calculatorActions.setIsNewCar)]: setIsNewCar,
  [getType(calculatorActions.push)]: push,
  [getType(calculatorActions.remove)]: remove,
  [getType(calculatorActions.open)]: open,
  [getType(calculatorActions.close)]: close,
  [getType(calculatorActions.countItemsCart)]: countItemsCart,
};

export const CalculatorReducer = handleActions(reducerMap, initialState);
