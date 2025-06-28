import { useState } from "react";
import Clock from "./Clock";

function Dropdown({ setColor }) {
  return (
    <div>
      <select
        className=""
        name=""
        id=""
        onChange={() => setColor(event.target.value)}
      >
        <option value="">select color</option>
        <option value={"red"}>red</option>
        <option value={"green"}>green</option>
        <option value={"blue"}>blue</option>
      </select>
    </div>
  );
}
export default Dropdown;
