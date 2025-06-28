import { useState } from "react";
import CardUserProfile from "./CardUserProfile";
import clgdata from "./assets/json/collegedata.json";
function SoftwareDeveloper() {
  const [cardStyle, setStyle] = useState({
    border: "1px solid",
    margin: "10px",
    width: "200px",
    boxShadow: " 1px 2px 3px 0px #9999",
  });
  const [textColor, setTextColor] = useState("");
  const [grid, setGrid] = useState(true);

  function updateTheme(bg, text) {
    console.log(bg);

    setStyle({ ...cardStyle, backgroundColor: bg });
    setTextColor(text);
  }
  return (
    <>
      <h1 style={{ color: "red" }}> here is software developer profiles</h1>

      <button onClick={() => updateTheme("grey", "green")}>
        change theme to grey
      </button>
      <button onClick={() => updateTheme("red", "yellow")}>
        change theme to red
      </button>
      <button onClick={() => setGrid(!grid)}>change grid</button>
      <div style={{ display: grid ? "flex" : "block", flexWrap: "wrap" }}>
        <CardUserProfile
          cardStyle={cardStyle}
          textColor={textColor}
          clgdata={clgdata}
        ></CardUserProfile>
      </div>
    </>
  );
}

export default SoftwareDeveloper;
