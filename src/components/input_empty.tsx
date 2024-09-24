import React, { useState, useEffect } from "react";
import "../styles/component.css"; // components.cssをインポート

interface InputEmptyProps {
  answer: number[]; // answerはnumber配列型
  setAnswer: React.Dispatch<React.SetStateAction<number[]>>; // setAnswerの型
  generateExpression: () => void; // generateExpressionの型
}

const InputEmpty: React.FC<InputEmptyProps> = ({
  answer,
  setAnswer,
  generateExpression,
}) => {
  const [inputValue, setInputValue] = useState<number>();

  // 入力値が変更された時に値を更新する
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value); // 入力値を数値に変換
    setInputValue(newValue);
  };

  // inputValueが変化するたびに実行
  useEffect(() => {
    if (inputValue === answer[0]) {
      console.log("正解");
    }
  }, [inputValue]);

  return (
    <div>
      <label htmlFor="userInput">入力してください: </label>
      <input
        type="number"
        id="userInput"
        value={inputValue}
        onChange={handleInputChange} // 入力値変更時に状態を更新
      />
      <button onClick={generateExpression}>式を生成</button>{" "}
      {/* ボタンを追加 */}
      <p>現在の答え: {answer.join(", ")}</p> {/* 現在の答えを表示 */}
    </div>
  );
};

export default InputEmpty;
