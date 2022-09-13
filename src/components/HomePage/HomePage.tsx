import { NextPage } from "next";
import Head from "next/head";

import styles from "./HomePage.module.scss";

import { Calculator } from "../Calculator/Calculator";
import { HeadMenu } from "../Head/HeadMenu";
import { Main } from "../Main/Main";

export const HomePage: NextPage = () => {
  return (
    <div className={styles.background}>
      <Head>
        <title>Cars-Custom</title>
      </Head>
      <HeadMenu />
      <div className={styles.all}>
        <Main />
      </div>
      <div className={styles.content}>
        <Calculator />
      </div>
    </div>
  );
};
