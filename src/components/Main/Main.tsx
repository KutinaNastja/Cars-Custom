import { useDispatch, useSelector } from "react-redux";

import styles from "./Main.module.scss";

import videoBg from "../../assets/videoBg.mp4";
import { specialOffersActions } from "../../store/reducers/specialOffers";
import { getIsOpenSpecialOffers } from "../../store/reducers/specialOffers/specialOffers.selector";
import { SpecialOffers } from "../SpecialOffers/SpecialOffers";

export const Main = () => {
  const dispatch = useDispatch();
  const openPopup = () => dispatch(specialOffersActions.open());
  const isOpenSpecialOffers = useSelector(getIsOpenSpecialOffers);

  return (
    <div className={styles.main}>
      <video className={styles.video} src={videoBg} autoPlay loop muted />
      <div className={styles.wrapper}>
        <div>{isOpenSpecialOffers && <SpecialOffers />}</div>
        <p className={styles.description}>
          Car's Custom - профессиональный центр по оказанию детейлинг услуг для автомобилей.
          <br /> Мы считаем, что красота в мелочах.
          <br /> Именно поэтому мы оказываем услуги с особым трепетом и внимательностью.
        </p>
        <div onClick={openPopup} className={styles.specialOffers}>
          Спецпредложение
        </div>
      </div>
    </div>
  );
};
