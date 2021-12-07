// @ts-ignore
import { mount } from "marketing/MarketingApp";
import { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    // @ts-ignore
    mount(ref.current, {
      initialPath: "/",
      onNavigate: () => {},
    });
  }, []);

  return <div ref={ref} />;
};
