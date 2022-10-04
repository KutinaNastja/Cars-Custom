import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import styles from "./CheckboxAndPrice.module.scss";

import buttonClose from "../../../../assets/close.svg";
import buttonToUnfold from "../../../../assets/toUnfold.svg";
import { calculatorActions, Service } from "../../../../store/reducers/calculator";
import { PRICE_LIST } from "../../../../store/reducers/calculator/calculator.const";
import { getIsOpenDescription } from "../../../../store/reducers/calculator/calculator.selector";

export const CheckboxAndPrice = () => {
  const dispatch = useDispatch();
  const openDescription = () => dispatch(calculatorActions.open());
  const closeDescription = () => dispatch(calculatorActions.close());
  const isOpenDescription = useSelector(getIsOpenDescription);

  const toUnfold = buttonToUnfold.src;
  const closePopUp = buttonClose.src;

  const PriceList = PRICE_LIST;
  return (
    <div className={styles.checkboxAndPrice}>
      <div className={styles.checkboxAndText}>
        {PriceList?.map((e: Service) => (
          <div key={e.id} className={styles.checkbox}>
            <div className={styles.checkboxAndTitle}>
              <div className={styles.buttonAndTitle}>
                <div className={styles.selectionButton} />
                <div className={styles.title}>{e.title}</div>
              </div>
              <div
                className={cn(styles.expandButton, isOpenDescription && styles.expandButton_disabled)}
                onClick={openDescription}>
                <img src={toUnfold} alt="toUnfold" width={15} />
              </div>
            </div>
            {isOpenDescription && (
              <div className={styles.buttonAndText}>
                <div className={styles.text}>{e.text}</div>
                <div className={styles.toRoll} onClick={closeDescription}>
                  <img src={closePopUp} alt="closePopUp" width={15} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.priceAndButton}>
        <div className={styles.price}> от 10 000 ₽</div>
        <div className={styles.applicationButton}>Записаться</div>
      </div>
    </div>
  );
};
