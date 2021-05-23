import { useEffect } from "react";

import { handleScroll } from "../services/helpers";

const useScrollTop = () =>
  useEffect(() => {
    if (window.scrollY !== 0) handleScroll();
  }, []);

export default useScrollTop;
