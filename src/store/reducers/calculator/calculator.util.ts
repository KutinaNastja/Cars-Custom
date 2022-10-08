import { Service } from "./calculator.model";

export const getSumItemsCart = ({ cart, isNewCar }: { cart: Service[]; isNewCar: boolean }): number => {
  const sumRaw = cart.reduce((acc, v) => v.price + acc, 0);
  return isNewCar ? sumRaw + sumRaw * 0.1 : sumRaw;
};
