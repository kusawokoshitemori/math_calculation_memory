import React from "react";
import backgroundImage1 from "../images/背景_夏_涼しい.jpeg";
import "../styles/style.css";

const Game = () => {
  return (
    <div>
      <div
        className="Game_layout"
        style={{ backgroundImage: `url(${backgroundImage1})` }}
      >
        <p>ゲーム画面</p>
      </div>
    </div>
  );
};

export default Game;
