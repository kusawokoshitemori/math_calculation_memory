import React, { useState, useEffect } from "react";
import "../styles/component.css"; // components.cssをインポート

interface InputEmptyProps {
  answer: number[]; // answerはnumber配列型
  setAnswer: React.Dispatch<React.SetStateAction<number[]>>; // setAnswerの型
  inputValue: number | undefined;
  setInputValue: React.Dispatch<React.SetStateAction<number | undefined>>;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  restNumber: number;
}

const InputEmpty: React.FC<InputEmptyProps> = ({
  answer,
  inputValue,
  setInputValue,
  onKeyDown,
  restNumber,
}) => {
  // 入力値が変更された時に値を更新する
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value); // 入力値を数値に変換
    setInputValue(newValue);
  };

  return (
    <div>
      {" "}
      <div className="answer_input_place_container">
        <input
          type="number"
          className="answer_input_place"
          value={inputValue ?? ""} // undefinedの場合は空文字を表示
          onChange={handleInputChange} // 入力値変更時に状態を更新
          onKeyDown={onKeyDown} // 親から受け取ったonKeyDownを適用
          placeholder={restNumber > 0 ? `${restNumber}` : ""}
        />
      </div>
      <p>現在の答え: {answer.join(", ")}</p> {/* 現在の答えを表示 */}
    </div>
  );
};

export default InputEmpty;
