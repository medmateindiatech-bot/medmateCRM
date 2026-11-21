import * as React from "react";
import { useLocation } from "react-router";

export function ScrollToHash() {
  const { pathname, hash } = useLocation();
  React.useEffect(() => {
    if (hash) {
      const i = hash.slice(1),
        l = document.getElementById(i);
      if (l) {
        l.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
