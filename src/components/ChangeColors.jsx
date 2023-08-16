import React from "react";
import { useState } from "react";

function ChangeColors() {
  const [input, setInput] = useState("");
  const [bg, setBg] = useState("");
  const [select, setSelect] = useState("");
  const [border, setBorder] = useState("none");
  const handleColor = () => {
    setBg(input);
  };
  const handleBorder = () => {
    setBorder(select);
  };
  return (
    <div
      className="col-lg-6  p-3 mx-auto mt-5"
      style={{ background: bg, border: border }}
    >
      <h2>Enter tour favorite color :</h2>
      <input
        type="text"
        className="form-control"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button className="btn btn-info mt-3" onClick={handleColor}>
        change background color
      </button>
      <select
        className="form-select  mt-5"
        value={select}
        onChange={(e) => setSelect(e.target.value)}
      >
        <option value="ridge">ridge</option>
        <option value="double">double</option>
        <option value="groove">groove</option>
        <option value="outset">outset</option>
        <option value="solid">solid</option>
      </select>
      <button className="btn btn-info mt-3" onClick={handleBorder}>
        change border
      </button>
    </div>
  );
}

export default ChangeColors;
