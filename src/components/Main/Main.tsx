import styles from "./Main.module.scss";

import burger from "../../assets/burger.svg";
import videoBg from "../../assets/videoBg.mp4";
import { specialOffersActions } from "../../store/reducers/specialOffers";

export const Main = () => {
  const openPopup = () => dispatch(specialOffersActions.open());
  return (
    <div className={styles.main}>
      <video className={styles.video} src={videoBg} autoPlay loop muted />
      <div className={styles.head}>
        {/* <svg height="20" width="20"> */}
        {/*   <use href={burger} /> */}
        {/* </svg> */}
        <p className={styles.number}>+7 900 633 97 98</p>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.description}>
          Car's Custom - профессиональный центр по оказанию детейлинг услуг для автомобилей. Мы считаем, что красота в
          мелочах. Именно поэтому мы оказываем услуги с особым трепетом и внимательностью.
        </p>
        <div onClick={openPopup} className={styles.specialOffers}>
          Спецпредложение
        </div>
      </div>
    </div>
  );
};
