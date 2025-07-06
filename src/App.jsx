import { useState } from "react";
import "./App.css";
import Userinf, { Profile } from "./UserComponent";
import Todo from "./todo";
import Hooks from "./Hooks";
import Toggle from "./Toggle";
import Props from "./Props";
import Wrapper from "./Wrapper";
import InputComp from "./Input";
import TableData from "./TableData";
import Reuse from "./Reuse";
import Dropdown from "./Dropdown";
import Clock from "./Clock";
import CollegeData from "./CollegeData";
import Hooks1 from "./Hook1";
import Hooks2 from "./Hooks2";
import SoftwareDeveloper from "./SoftwareDeveloper";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="row">
        <SoftwareDeveloper></SoftwareDeveloper>
        <hr />
        <Hooks2></Hooks2>
        <hr />
        <Hooks1></Hooks1>
        <hr />
        <CollegeData></CollegeData>
        <hr />
        {/* <Dropdown></Dropdown> */}
        <Clock></Clock>
        <hr />
        <Reuse></Reuse>
        <hr />
        <h1>create a react application</h1>
        <p>jai shree ram ji</p>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>update</button>
        <Newfunction />
        <hr />
        {/* <Userinf></Userinf> */}
        <hr />
        <Profile></Profile>
        <hr />
        <Todo></Todo>
        <hr />
        <Hooks></Hooks>
        <hr />
        <Toggle></Toggle>
        <hr />
        <Props username={count} update={setCount}></Props>
        <hr />
        <Wrapper>
          <h1>this is tag from app</h1>
        </Wrapper>
        <hr />
        <InputComp></InputComp>

        <hr />
        <TableData></TableData>
      </div>
    </>
  );
}

function Newfunction() {
  return (
    <>
      <p>this is new method</p>
    </>
  );
}
export default App;
