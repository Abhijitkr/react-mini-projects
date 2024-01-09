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
      <input
        type="text"
        name="qr-code"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={() => handleQr(input)}>Generate</button>
      <div className="qr-code">
        <QRCode value={qrCode} size={400} />
      </div>
    </div>
  );
}
