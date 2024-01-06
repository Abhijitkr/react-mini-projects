import { useState } from "react";
import "./style.css";

export default function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#999999");

  const getRandom = (length) => Math.floor(Math.random() * length);
  const handleHex = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    var hexColor = "#";
    for (var i = 0; i < 6; i++) {
      hexColor += hex[getRandom(hex.length)];
    }
    setColor(hexColor);
  };
  const handleRgb = () => {
    const r = getRandom(256);
    const g = getRandom(256);
    const b = getRandom(256);
    const rgbColor = `rgb(${r},${g},${b})`;
    setColor(rgbColor);
  };

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <button onClick={() => setColorType("hex")}>HEX</button>
      <button onClick={() => setColorType("rgb")}>RGB</button>
      <button onClick={colorType === "hex" ? handleHex : handleRgb}>
        Generate Color
      </button>
      <div className="colors">
        <p>{colorType}</p>
        <p>{color}</p>
      </div>
    </div>
  );
}
