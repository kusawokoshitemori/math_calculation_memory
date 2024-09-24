import React, { useState, useEffect } from "react";
import TimeLimitTimer from "../components/TimeLimitTimer";
import Math_formula from "../components/math_formula";
import InputEmpty from "../components/input_empty";
import backgroundImage1 from "../images/背景_夏_涼しい.jpeg";
import "../styles/style.css";

const Game: React.FC = () => {
  const [answer, setAnswer] = useState<number[]>([]); // answer状態を管理 これでこっちに配列を用意できる

  const [timeLeft, setTimeLeft] = useState(30); // 初期制限時間を30秒に設定
  const [correctCount, setCorrectCount] = useState(0); //正解数

  useEffect(() => {
    // タイマーを設定
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0)); // 0未満にはしない
    }, 1000);

    // コンポーネントがアンマウントされるときにクリーンアップ
    return () => clearInterval(timer);
  }, []);

  //答え確認用
  useEffect(() => {
    console.log("Current answers in parent:", answer);
  }, [answer]);

  /* 誤答した時に5秒引くやつ */
  const handleIncorrectAnswer = () => {
    setTimeLeft((prev) => Math.max(prev - 5, 0)); // 5秒を引く。ただし、負の値にはしない
  };

  // 親コンポーネントで generateExpression 関数を定義(別の子コンポーネントに)
  const generateExpression = () => {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const newAnswer = num1 + num2;
    setAnswer([...answer, newAnswer]); // 答えを更新
    return `${num1} + ${num2}`; // 数式を返す
  };

  //入力した数字が入ってる
  const [inputValue, setInputValue] = useState<number>();
  // Enterキーが押されたときのハンドラ
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // 入力値が正解の場合
      if (inputValue === answer[answer.length - 1]) {
        setCorrectCount((prevCount) => prevCount + 1); // 正解カウントを増やす
        console.log("正解");
        generateExpression(); // 次の式を生成
      } else {
        console.log("不正解");
        handleIncorrectAnswer();
      }

      // 入力値をリセット
      setInputValue(undefined);
    }
  };

  return (
    <div className="answer_input_container">
      <h1>ゲーム画面 </h1>
      <TimeLimitTimer
        timeLeft={timeLeft}
        onIncorrectAnswer={handleIncorrectAnswer}
      />
      <Math_formula answer={answer} setAnswer={setAnswer} />
      <InputEmpty
        answer={answer}
        setAnswer={setAnswer}
        inputValue={inputValue}
        setInputValue={setInputValue}
        onKeyDown={handleKeyDown}
      />
      {/* 他のゲームロジックを追加 */}
    </div>
  );
};

export default Game;
