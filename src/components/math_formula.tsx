import React, { useState, useEffect } from "react";
import "../styles/component.css"; // styles/component.cssをインポート

interface MathFormulaProps {
  answer: number[];
  setAnswer: React.Dispatch<React.SetStateAction<number[]>>;
}

const Math_formula: React.FC<MathFormulaProps> = ({ answer, setAnswer }) => {
  const [expression, setExpression] = useState<string>("");

  useEffect(() => {
    console.log(answer); // answer が更新された後に実行される
  }, [answer]);

  const addAnswer = (newAnswer: number) => {
    setAnswer((prevAnswers) => {
      const updatedAnswers = [...prevAnswers, newAnswer]; // 更新後の配列を作成
      return updatedAnswers; // 更新された配列を返す
    });
  };

  const generateExpression = () => {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    setExpression(`${num1} + ${num2}`);
    addAnswer(num1 + num2);
  };

  return (
    <div>
      <button onClick={generateExpression}>式を生成</button>
      <p>{expression}</p>
      {/* 答えは非表示にする */}
    </div>
  );
};

export default Math_formula;
