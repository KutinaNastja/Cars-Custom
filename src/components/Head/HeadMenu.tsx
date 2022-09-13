import styles from "./HeadMenu.module.scss";

import burger from "../../assets/burger.svg";
import carsLogo from "../../assets/cars-custom.jpg";

export const HeadMenu = () => {
  const menuBurger = burger.src;
  const logo = carsLogo.src;
  return (
    <div className={styles.head}>
      <div className={styles.wrapperHead}>
        <img src={menuBurger} alt="burger" width={20} />
        <img src={logo} alt="logo" width={70} />
      </div>
      <p className={styles.number}>+7 900 633 97 98</p>
    </div>
  );
};
