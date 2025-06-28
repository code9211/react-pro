import { useState } from "react";

function InputComp() {
  const [value, setValue] = useState("");
  return (
    <>
      <span>enter the value:</span>
      <input
        type="text"
        value={value}
        onChange={() => setValue(event.target.value)}
      />
      <h4>{value}</h4>
      <button onClick={() => setValue("")}>clear it</button>
    </>
  );
}

export default InputComp;
