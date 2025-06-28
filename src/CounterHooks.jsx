import { useEffect } from "react";

function CounterHooks({ count }) {
  useEffect(() => {
    console.log("is this mounted");

    return () => {
      console.log("now this is unmounted");
    };
  }, []);

  return (
    <>
      <h4>{count}</h4>
    </>
  );
}
export default CounterHooks;
