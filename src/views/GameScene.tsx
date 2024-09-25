import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import TimeLimitTimer from "../components/TimeLimitTimer";
import Math_formula from "../components/math_formula";
import InputEmpty from "../components/input_empty";
import backgroundImage1 from "../images/背景_夏_涼しい.jpeg";
import "../styles/style.css";

const Game: React.FC = () => {
  const [answer, setAnswer] = useState<number[]>([]); // answer状態を管理 これでこっちに配列を用意できる

  const [timeLeft, setTimeLeft] = useState(30); // 初期制限時間を30秒に設定
  const [correctCount, setCorrectCount] = useState(0); //正解数
  const [NewFormula, setNewFormula] = useState("Enterで開始"); //式の表示
  const Remember_Numbers_Numbers: number = 2; //おぼえる数 defaltは2

  const [CountStartBool, setCountStartBool] = useState(false);
  useEffect(() => {
    if (!CountStartBool) return; // CountStartBoolがfalseなら何もしない
    // タイマーを設定
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0)); // 0未満にはしない
    }, 1000);

    // コンポーネントがアンマウントされるときにクリーンアップ
    return () => clearInterval(timer);
  }, [CountStartBool]);

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
    const formula = `${num1} + ${num2}`; // 新しい数式を作成
    setNewFormula(formula); // 数式を newFormula に保存
  };

  //入力した数字が入ってる
  const [inputValue, setInputValue] = useState<number>();
  // Enterキーが押されたときのハンドラ
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // 入力値が正解の場合
      if (
        inputValue === undefined &&
        answer.length <= Remember_Numbers_Numbers
      ) {
        if (answer.length === Remember_Numbers_Numbers) {
          setCountStartBool(true);
        }
        generateExpression();
      } else if (
        inputValue === answer[answer.length - (Remember_Numbers_Numbers + 1)]
      ) {
        setCorrectCount((prevCount) => prevCount + 1); // 正解カウントを増やす
        console.log("正解");
        generateExpression(); // 次の式を生成
      } else if (inputValue === undefined) {
        console.log("空だよ");
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
      <div className="time_input_wrapper">
        <TimeLimitTimer timeLeft={timeLeft} />
      </div>

      <Math_formula
        answer={answer}
        setAnswer={setAnswer}
        NewFormula={NewFormula}
      />
      <InputEmpty
        answer={answer}
        setAnswer={setAnswer}
        inputValue={inputValue}
        setInputValue={setInputValue}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Game;
