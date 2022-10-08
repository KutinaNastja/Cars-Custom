import type { AppProps } from "next/app";

import "../../styles/globals.css";

import { wrapper } from "../store/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { calculatorActions } from "../store/reducers/calculator";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(calculatorActions.countItemsCart())
  },[])

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
