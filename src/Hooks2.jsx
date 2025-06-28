import { useEffect, useState } from "react";
import CounterHooks from "./CounterHooks";

function Hooks2() {
  const [display, setDisplay] = useState(true);
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Above is react hooks2 example</h1>
      <button
        type="button"
        onClick={() => {
          setDisplay(!display), setCounter(counter + 1);
        }}
      >
        {" "}
        click me
      </button>
      <div>
        {display ? <CounterHooks count={counter}></CounterHooks> : null}
      </div>
    </>
  );
}

export default Hooks2;
