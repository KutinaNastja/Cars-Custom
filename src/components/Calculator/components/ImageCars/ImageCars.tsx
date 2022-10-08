import { useSelector } from "react-redux";

import styles from "./ImageCars.module.scss";

import cars_new from "../../../../assets/cars_new.jpg";
import { getCartSelector } from "../../../../store/reducers/calculator/calculator.selector";

export const ImageCars = () => {
  const cars = cars_new.src;
  const cart = useSelector(getCartSelector);
  return (
    <div className={styles.cars}>
      <img src={cars} alt={cars} />
    </div>
  );
};
