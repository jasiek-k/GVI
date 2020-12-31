import { useEffect } from 'react';

const useScrollTop = () => {
  useEffect(() => {   
    if (window.scrollY !== 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);
};

export default useScrollTop;
