import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    let element = document.getElementById("root");
    element.scrollIntoView(true);
  }, [pathname]);

  return null;
}
