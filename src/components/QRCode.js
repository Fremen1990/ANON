import React from "react";
import QRCodePicture from "../assets/QR CODE-ai.png";
import "./QRCode.scss";

export function QRCode() {
  return (
    <>
      <div className="QRCode-container">
        <img className="QRCodePicture" src={QRCodePicture} />
      </div>
    </>
  );
}
