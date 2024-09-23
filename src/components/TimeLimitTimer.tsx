import React from "react";
import "../styles/component.css"; // styles/component.cssをインポート

interface TimeLimitTimerProps {
  timeLeft: number; // 残り時間を受け取る
  onIncorrectAnswer: () => void; // 誤答時の処理を受け取る
}

const TimeLimitTimer: React.FC<TimeLimitTimerProps> = ({
  timeLeft,
  onIncorrectAnswer,
}) => {
  return (
    <div>
      <p>残り時間: {timeLeft}秒</p>
      <button onClick={onIncorrectAnswer}>誤答する</button>
      {/* 他の内容やロジックを追加できます */}
    </div>
  );
};

export default TimeLimitTimer;
