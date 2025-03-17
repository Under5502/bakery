// src/components/ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Cuộn về đầu trang mỗi khi path thay đổi
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollTop;
