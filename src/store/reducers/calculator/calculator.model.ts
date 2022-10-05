export type Service = {
  id: number;
  title: string;
  priceNewCar: number;
  priceOldCar: number;
  text: string;
};

export type AddToCartParams = { service: Service };

export interface CalculatorState {
  isNewCar: boolean;
  cart: Service[];
  lists: any;
}
