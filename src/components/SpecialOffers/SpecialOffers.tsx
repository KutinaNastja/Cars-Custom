import { useDispatch } from "react-redux";

import styles from "./SpecialOffers.module.scss";

import close from "../../assets/close.svg";
import { specialOffersActions } from "../../store/reducers/specialOffers";

export const SpecialOffers = () => {
  const dispatch = useDispatch();
  const closePopup = () => dispatch(specialOffersActions.close());
  const closePopUp = close.src;

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonClosePopUp}>
        <img onClick={closePopup} src={closePopUp} alt="closePopUp" width={15} />
      </div>
      <p>Special Offers</p>
    </div>
  );
};
