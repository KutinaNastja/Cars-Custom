export type Service = {
  id: number;
  title: string;
  price: number;
  text: string;
};

export type AddToCartParams = { service: Service };

export interface CalculatorState {
  isNewCar: boolean;
  cart: Service[];
  lists: any;
  sum: number;
}
