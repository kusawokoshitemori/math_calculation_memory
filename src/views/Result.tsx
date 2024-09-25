import React from "react";
import backgroundImage1 from "../images/背景_夏_涼しい.jpeg";
import "../styles/style.css";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();

  const goToTop = () => {
    navigate("/"); // ここで '/' は Top ページのパスを指します
  };
  const playAgain = () => {
    navigate("/game");
  };

  return (
    <div>
      <div
        className="Setting_layout"
        style={{ backgroundImage: `url(${backgroundImage1})` }}
      >
        <p>あなたのスコアは </p>
        <button onClick={playAgain}>もう一度遊ぶ</button>
        <button onClick={goToTop}>タイトルに戻る</button>
      </div>
    </div>
  );
};

export default Result;
