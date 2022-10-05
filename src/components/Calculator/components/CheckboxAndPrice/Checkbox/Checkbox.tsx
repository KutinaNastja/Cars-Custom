import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import styles from "./Checkbox.module.scss";

import buttonClose from "../../../../../assets/close.svg";
import buttonToUnfold from "../../../../../assets/toUnfold.svg";
import { calculatorActions } from "../../../../../store/reducers/calculator";
import { getCartSelector, getLists } from "../../../../../store/reducers/calculator/calculator.selector";
import { CheckboxProps } from "./Checkbox.model";

export const Checkbox = ({ service, i }: CheckboxProps) => {
  const dispatch = useDispatch();
  const openDescription = (i: number) => () => dispatch(calculatorActions.open({ i }));
  const closeDescription = (i: number) => () => dispatch(calculatorActions.close({ i }));
  const addAService = () => dispatch(calculatorActions.push({ service }));
  const removeService = () => dispatch(calculatorActions.remove({ service }));
  const lists = useSelector(getLists);
  const cart = useSelector(getCartSelector);
  const isAddedCart = cart.find((cartItem) => cartItem.id === service.id);
  const toUnfold = buttonToUnfold.src;
  const closePopUp = buttonClose.src;
  const buttonClick = isAddedCart ? removeService : addAService;

  return (
    <div className={styles.checkbox}>
      <div className={styles.checkboxAndTitle}>
        <div className={styles.buttonAndTitle}>
          <div
            onClick={buttonClick}
            className={cn(styles.selectionButton, isAddedCart && styles.selectionButton_disabled)}
          />
          <div className={styles.title}>{service.title}</div>
        </div>
        <div
          className={cn(styles.expandButton, lists?.[i] && styles.expandButton_disabled)}
          onClick={openDescription(i)}>
          <img src={toUnfold} alt="toUnfold" width={15} />
        </div>
      </div>
      {lists?.[i] && (
        <div className={styles.buttonAndText}>
          <div className={styles.text}>{service.text}</div>
          <div className={styles.toRoll} onClick={closeDescription(i)}>
            <img src={closePopUp} alt="closePopUp" width={15} />
          </div>
        </div>
      )}
    </div>
  );
};
