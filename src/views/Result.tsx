import React from "react";
import backgroundImage1 from "../images/背景_夏_涼しい.jpeg";
import "../styles/style.css";

const Result = () => {
  return (
    <div>
      <div
        className="Setting_layout"
        style={{ backgroundImage: `url(${backgroundImage1})` }}
      >
        <p>結果が入る</p>
      </div>
    </div>
  );
};

export default Result;
