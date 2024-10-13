import { useCallback, useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";

import { sizes } from "../theme";

export const useResponsive = () => {
  const { width = 0 } = useWindowSize();

  const [state, setState] = useState({
    mobileS: false,
    mobileM: false,
    mobileL: false,
    tablet: false,
    laptop: false,
    laptopL: false,
    desktop: false,
  });

  const onResizeHandler = useCallback(() => {
    const mobileS = width >= sizes.mobileS;
    const mobileM = width >= sizes.mobileM;
    const mobileL = width >= sizes.mobileL;
    const tablet = width >= sizes.tablet;
    const laptop = width >= sizes.laptop;
    const laptopL = width >= sizes.laptopL;
    const desktop = width >= sizes.desktop;
    setState({ mobileS, mobileM, mobileL, tablet, laptop, laptopL, desktop });
  }, [width]);

  useEffect(() => {
    onResizeHandler();
  }, [onResizeHandler]);

  return state;
};
