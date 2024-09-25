import React from "react";
import "../styles/component.css"; // styles/component.cssをインポート

interface TimeLimitTimerProps {
  timeLeft: number; // 残り時間を受け取る
}

const TimeLimitTimer: React.FC<TimeLimitTimerProps> = ({ timeLeft }) => {
  return (
    <div>
      <div className="Time_module_container">
        <div className="Timer_back_line"></div>
        <div className="Timer_back_square">
          <p className="Time_Left">{timeLeft}</p>
        </div>
      </div>
    </div>
  );
};

export default TimeLimitTimer;
