import React, { useState, useEffect } from "react";
import QRCodePicture from "../assets/QR CODE-ai.png";
import "./QRCode.scss";

const QRCode = () => {
  const [bigQr, setBigQr] = useState(false);

  return (
    <>
      <div
        className={`QRCode-container ${bigQr ? "bigQrClass" : ""}`}
        onClick={() => {
          setBigQr(!bigQr);
          console.log("BigQE", bigQr);
        }}
      >
        {" "}
        <img
          className="QRCodePicture"
          src={QRCodePicture}
          alt="QR CODE-ai.png"
        />
      </div>
    </>
  );
};

export default QRCode;
