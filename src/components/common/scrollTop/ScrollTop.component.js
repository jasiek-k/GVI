import React, { useEffect, useRef, useCallback } from "react";

import { ArrowUp } from "../../../assets/Icons";
import { handleScroll } from "../../../services/helpers";

import "./ScrollTop.styles.scss";

const ScrollTop = () => {
  const buttonRef = useRef(null);

  const handleButtonVisibility = useCallback(
    () =>
      window.pageYOffset >= window.innerHeight && buttonRef.current
        ? buttonRef.current.classList.add("visible")
        : buttonRef.current.classList.remove("visible"),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleButtonVisibility);
    };
  }, [handleButtonVisibility]);

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={handleScroll}
      className="scroll-top--button"
    >
      <div className="scroll-top--button__icon">
        <ArrowUp />
      </div>
    </button>
  );
};

export default ScrollTop;
