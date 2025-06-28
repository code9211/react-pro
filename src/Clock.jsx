import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

function Clock() {
  const [timer, setTimer] = useState(0);

  const [color, setColor] = useState("red");
  useEffect(() => {
    setInterval(() => {
      setTimer(new Date().toLocaleTimeString());
    }, 1000);
  });
  return (
    <div>
      <h1>Clock Component</h1>
      <Dropdown setColor={setColor}></Dropdown>
      <h2 style={{ color: color }}>{timer}</h2>
    </div>
  );
}

export default Clock;
