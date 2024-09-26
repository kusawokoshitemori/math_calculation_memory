import React, { createContext, useState, ReactNode } from "react";

// Contextの型を定義
interface RememberContextType {
  Remember_Numbers_Numbers: number;
  setRemember_Numbers_Numbers: (value: number) => void;
  correctCount: number;
  setCorrectCount: React.Dispatch<React.SetStateAction<number>>; // useStateと同じ型を定義
}

// 初期値を定義
const initialContextValue: RememberContextType = {
  Remember_Numbers_Numbers: 2,
  setRemember_Numbers_Numbers: () => {},
  correctCount: 0, // 正解数の初期値
  setCorrectCount: () => {},
};

// Contextの作成
export const RememberContext =
  createContext<RememberContextType>(initialContextValue);

// Provider コンポーネント
export const RememberProvider = ({ children }: { children: ReactNode }) => {
  const [Remember_Numbers_Numbers, setRemember_Numbers_Numbers] =
    useState<number>(2);
  const [correctCount, setCorrectCount] = useState<number>(0); // 正解数の状態を追加

  return (
    <RememberContext.Provider
      value={{
        Remember_Numbers_Numbers,
        setRemember_Numbers_Numbers,
        correctCount,
        setCorrectCount,
      }}
    >
      {children}
    </RememberContext.Provider>
  );
};
