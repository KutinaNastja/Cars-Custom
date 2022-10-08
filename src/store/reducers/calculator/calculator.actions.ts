import { createAction } from "typesafe-actions";

import { AddToCartParams } from "./calculator.model";

export const calculatorActions = {
  setIsNewCar: createAction("@CALCULATOR.setIsNewCar.COMMIT")<boolean>(),
  push: createAction("@CALCULATOR.push.COMMIT")<AddToCartParams>(),
  remove: createAction("@CALCULATOR.remove.COMMIT")<AddToCartParams>(),
  open: createAction("@CALCULATOR.open.COMMIT")<{ i: number }>(),
  close: createAction("@CALCULATOR.close.COMMIT")<{ i: number }>(),
  countItemsCart: createAction("@CALCULATOR.countItemsCart.COMMIT")(),
};
