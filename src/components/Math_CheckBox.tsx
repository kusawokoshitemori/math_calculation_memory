import React, { useState } from "react";
import { useRememberContext } from "../context/RememberContext";

interface MathCheckBoxProps {
  label: string; // labelはstring型
  checkboxNumber: number; // checkboxNumberはnumber型
}

const Math_CheckBox: React.FC<MathCheckBoxProps> = ({
  label,
  checkboxNumber,
}) => {
  const {
    isChecked1,
    isChecked2,
    isChecked3,
    isChecked4,
    setIsChecked1,
    setIsChecked2,
    setIsChecked3,
    setIsChecked4,
  } = useRememberContext();

  const handleCheckboxChange = () => {
    console.log(`Checkbox ${checkboxNumber} clicked.`);
    switch (checkboxNumber) {
      case 1:
        setIsChecked1(true); // 状態をtrueに設定
        console.log(isChecked1);

        break;
      case 2:
        setIsChecked2(true);
        console.log(isChecked2);

        break;
      case 3:
        setIsChecked3(true);
        break;
      case 4:
        setIsChecked4(true);
        break;
      default:
        break;
    }
  };

  // チェック状態を取得
  const isChecked =
    checkboxNumber === 1
      ? isChecked1
      : checkboxNumber === 2
      ? isChecked2
      : checkboxNumber === 3
      ? isChecked3
      : checkboxNumber === 4
      ? isChecked4
      : false;

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange} // ここでイベントを処理
      />
      <label>{label}</label>
    </div>
  );
};

export default Math_CheckBox;
