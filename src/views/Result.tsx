import React from "react";
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
      <div className="Setting_layout">
        <p>あなたのスコアは </p>
        <button onClick={playAgain}>もう一度遊ぶ</button>
        <button onClick={goToTop}>タイトルに戻る</button>
      </div>
    </div>
  );
};

export default Result;
