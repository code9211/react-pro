import { useEffect, useState } from "react";

function Hooks1() {
  const [data, setData] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    callOnce();
  }, [counter, data]);

  function callOnce() {
    console.log("callled once ");
  }

  //   callOnce();
  return (
    <div>
      <h1>use effect hooks</h1>
      <button type="button" onClick={() => setData(data + 1)}>
        click data {data}
      </button>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        counter {counter}
      </button>
    </div>
  );
}

export default Hooks1;
