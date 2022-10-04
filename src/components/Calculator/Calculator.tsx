import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import styles from "./Calculator.module.scss";

import cars_new from "../../assets/cars_new.jpg";
import { calculatorActions } from "../../store/reducers/calculator";
import { getIsNewCarSelector } from "../../store/reducers/calculator/calculator.selector";
import { CheckboxAndPrice } from "./components/CheckboxAndPrice/CheckboxAndPrice";

export const Calculator = () => {
  const dispatch = useDispatch();
  const setNewCar = () => dispatch(calculatorActions.setIsNewCar(true));
  const setOldCar = () => dispatch(calculatorActions.setIsNewCar(false));
  const isNewCar = useSelector(getIsNewCarSelector);
  const cars = cars_new.src;
  return (
    <div className={styles.wrapperCalculator}>
      <div className={styles.calculator}>
        <div>
          <h1>Цены на услуги детейлинга</h1>
          <p>
            Для вашего удобства мы подготовили удобный онлайн-калькулятор стоимости услуг нашей детейлинг студии. Для
            начала выберите тип автомобиля: он только выехал из салона или уже откатал несколько десятков, а, может,
            даже сотен тысяч километров? Программа сразу же предложит оптимальный комплекс детейлинг услуг для
            сохранения внешнего вида вашего автомобиля на долгие годы или же, наоборот, для восстановления его былого
            лоска.
          </p>
        </div>
        <div className={styles.panelFilterMainPageContent}>
          <p>Выберите авто:</p>
          <div className={styles.panelFilterMainItem}>
            <div className={styles.switcher}>
              <div onClick={setNewCar} className={cn(styles.buttonSwitcher, isNewCar && styles.buttonSwitcher_active)}>
                Новый
              </div>
              <div onClick={setOldCar} className={cn(styles.buttonSwitcher, !isNewCar && styles.buttonSwitcher_active)}>
                Подержанный
              </div>
            </div>
          </div>
        </div>
        <div className={styles.carsWrapper}>
          <div className={styles.cars}>
            <img src={cars} alt={cars} />
          </div>
        </div>
        <CheckboxAndPrice />
      </div>
    </div>
  );
};
