import { useState } from "react";

export default function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState(null);

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
    <div
      className="w-screen h-screen text-center text-white"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-3xl font-bold pt-5">
        Random Color Generator Project
      </h1>
      <div>
        <button
          className="m-5 py-2 px-5 border bg-red-500"
          onClick={() => setColorType("hex")}
        >
          HEX
        </button>
        <button
          className="m-10 py-2 px-5 border bg-blue-500"
          onClick={() => setColorType("rgb")}
        >
          RGB
        </button>
        <button
          className="m-10 py-2 px-5 border bg-green-500"
          onClick={colorType === "hex" ? handleHex : handleRgb}
        >
          Generate Color
        </button>
      </div>
      <div className="font-bold m-60 flex flex-col gap-5">
        <p className="text-5xl">{colorType}</p>
        <p className="text-5xl">{color}</p>
      </div>
    </div>
  );
}
