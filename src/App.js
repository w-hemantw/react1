import { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");
  const [p, setp] = useState("");
  const write = () => {
    setp(value);
  };
  return (
    <div className="App">
      <b>
        {" "}
        <span>select category: </span>
      </b>
      <select onChange={(e) => setValue(e.target.value)}>
        <option>select the option</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        <option>E</option>
      </select>
      <button onClick={write}>submit</button>
      <br />
      <p style={{ color: "blue" }}>{p}</p>
    </div>
  );
}
