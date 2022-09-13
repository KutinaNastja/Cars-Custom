import styles from "./Calculator.module.scss";

import cars_new from "../../assets/cars_new.jpg";

export const Calculator = () => {
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

        <div className={styles.WrapperChooseCar}>
          <div className={styles.chooseCar}>Выберите авто:</div>
          <div className={styles.WrapperCar}>
            <div className={styles.new}>Новый</div>
            <div className={styles.old}>Подержанный</div>
          </div>
        </div>
        <div>
          <div>
            <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter" />
            <label htmlFor="subscribeNews">Subscribe to newsletter?</label>
          </div>
          <div>
            <img src={cars} alt={cars} width={500} />
          </div>
        </div>
      </div>
    </div>
  );
};
