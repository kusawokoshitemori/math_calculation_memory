import React, { createContext, useState, ReactNode, useContext } from "react";

// Contextの型を定義
interface RememberContextType {
  Remember_Numbers_Numbers: number;
  setRemember_Numbers_Numbers: (value: number) => void;
  correctCount: number;
  setCorrectCount: React.Dispatch<React.SetStateAction<number>>; // useStateと同じ型を定義
  isChecked1: boolean;
  isChecked2: boolean;
  isChecked3: boolean;
  isChecked4: boolean;
  setIsChecked1: (checked: boolean) => void;
  setIsChecked2: (checked: boolean) => void;
  setIsChecked3: (checked: boolean) => void;
  setIsChecked4: (checked: boolean) => void;
}

// 初期値を定義
const initialContextValue: RememberContextType = {
  Remember_Numbers_Numbers: 2,
  setRemember_Numbers_Numbers: () => {},
  correctCount: 0, // 正解数の初期値
  setCorrectCount: () => {},
  isChecked1: true,
  isChecked2: false,
  isChecked3: false,
  isChecked4: false,
  setIsChecked1: () => {},
  setIsChecked2: () => {},
  setIsChecked3: () => {},
  setIsChecked4: () => {},
};

// Contextの作成
export const RememberContext =
  createContext<RememberContextType>(initialContextValue);

// Provider コンポーネント
export const RememberProvider = ({ children }: { children: ReactNode }) => {
  const [Remember_Numbers_Numbers, setRemember_Numbers_Numbers] =
    useState<number>(2);
  const [correctCount, setCorrectCount] = useState<number>(0); // 正解数の状態を追加
  const [isChecked1, setIsChecked1] = useState<boolean>(false);
  const [isChecked2, setIsChecked2] = useState<boolean>(false);
  const [isChecked3, setIsChecked3] = useState<boolean>(false);
  const [isChecked4, setIsChecked4] = useState<boolean>(false);

  return (
    <RememberContext.Provider
      value={{
        Remember_Numbers_Numbers,
        setRemember_Numbers_Numbers,
        correctCount,
        setCorrectCount,
        isChecked1,
        isChecked2,
        isChecked3,
        isChecked4,
        setIsChecked1,
        setIsChecked2,
        setIsChecked3,
        setIsChecked4,
      }}
    >
      {children}
    </RememberContext.Provider>
  );
};

export const useRememberContext = () => useContext(RememberContext);
