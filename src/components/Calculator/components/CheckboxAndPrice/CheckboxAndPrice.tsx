import styles from "./CheckboxAndPrice.module.scss";

import { Service } from "../../../../store/reducers/calculator";
import { PRICE_LIST } from "../../../../store/reducers/calculator/calculator.const";
import { Checkbox } from "./Checkbox/Checkbox";

export const CheckboxAndPrice = () => {
  return (
    <div className={styles.checkboxAndPrice}>
      <div className={styles.checkboxAndText}>
        {PRICE_LIST?.map((e: Service, i) => (
          <Checkbox key={e.id} service={e} i={i} />
        ))}
      </div>
      <div className={styles.priceAndButton}>
        <div className={styles.price}> от 10 000 ₽</div>
        <div className={styles.applicationButton}>Записаться</div>
      </div>
    </div>
  );
};
