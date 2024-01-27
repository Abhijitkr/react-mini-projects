import { useState } from "react";
import { QRCode } from "react-qr-code";
import "./style.css";

export default function QRCodeGenerator() {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  function handleQr(getInput) {
    setQrCode(getInput);
    setInput("");
  }

  return (
    <div className="qr-code-container">
      <h1 className="text-3xl font-bold ">QR-Code Generator Project</h1>
      <div className="flex flex-col gap-2 m-5">
        <input
          type="text"
          name="qr-code"
          placeholder="Enter value"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="w-full h-10 px-4 py-2 text-gray-700 bg-gray-200 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
        />
        <button onClick={() => handleQr(input)}>Generate</button>
      </div>
      <div className="qr-code">
        <QRCode value={qrCode} size={400} />
      </div>
    </div>
  );
}
