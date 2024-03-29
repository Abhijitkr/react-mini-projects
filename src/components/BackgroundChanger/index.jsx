import { useState } from "react";

import "./style.css";

function BackgroundChanger() {
  const [color, setColor] = useState("aqua");

  return (
    <div className="main" style={{ background: color }}>
      <h1 className="text-3xl font-bold text-center p-5">
        Background Changer Project
      </h1>
      <div className="btn-container">
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          style={{ backgroundColor: "aqua" }}
          onClick={() => setColor("aqua")}
        >
          Aqua
        </button>
        <button
          style={{ backgroundColor: "green" }}
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          style={{ backgroundColor: "orange" }}
          onClick={() => setColor("orange")}
        >
          Orange
        </button>
        <button
          style={{ backgroundColor: "lime" }}
          onClick={() => setColor("lime")}
        >
          Lime
        </button>
      </div>
    </div>
  );
}

export default BackgroundChanger;
