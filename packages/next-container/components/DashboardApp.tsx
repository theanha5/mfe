// @ts-ignore
import { mount } from "dashboard/DashboardApp";
import { useRef, useEffect } from "react";


export default () => {
  const ref = useRef(null);

  useEffect(() => {
    // @ts-ignore
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
