import React, { useState, useEffect } from "react";
import TimeLimitTimer from "../components/TimeLimitTimer";
import Math_formula from "../components/math_formula";
import backgroundImage1 from "../images/背景_夏_涼しい.jpeg";
import "../styles/style.css";

const Game: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(30); // 初期制限時間を30秒に設定

  useEffect(() => {
    // タイマーを設定
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0)); // 0未満にはしない
    }, 1000);

    // コンポーネントがアンマウントされるときにクリーンアップ
    return () => clearInterval(timer);
  }, []);

  /* 誤答した時に5秒引くやつ */
  const handleIncorrectAnswer = () => {
    setTimeLeft((prev) => Math.max(prev - 5, 0)); // 5秒を引く。ただし、負の値にはしない
  };

  return (
    <div>
      <h1>ゲーム画面 </h1>
      {/*<TimeLimitTimer
        timeLeft={timeLeft}
        onIncorrectAnswer={handleIncorrectAnswer}
      />*/}
      <Math_formula />
      {/* 他のゲームロジックを追加 */}
    </div>
  );
};

export default Game;
