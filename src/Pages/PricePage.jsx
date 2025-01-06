import React from "react";
import "../CssFiles/PricePage.css";

export default function PricePage() {
  return (
    <div className="price-container">
      <div className="left">
        <span>We offer a variety of services.</span>
        <h1>Price list</h1>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font.
        </p>
      </div>
      <div className="right">
        <p>HAIRCUT     _____________________________   30</p>
        <p>SHAVE       _______________________________   20</p>
        <p>BEARED TRIM ____________________________    25</p>
        <p>CHILDREN'S HAIRCUT _____________________    20</p>
        <p>SENIOR HAIRCUT  _________________________   25</p>
      </div>
      <div className="bottom">
        <p className="spcloffer">SPECIAL OFFER</p>
        <p className="line">---------------------</p>
        <p className="wash"> WASH + CUT + BLOW-DRY</p>
        <p className="foronly">For only <span>$50</span></p>
      </div>
    </div>
  );
}
