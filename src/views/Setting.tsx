import React, { useContext } from "react";
import "../styles/style.css";
import Math_CheckBox from "../components/Math_CheckBox";
import { useRememberContext } from "../context/RememberContext";

const Setting = () => {
  const {
    isChecked1,
    setIsChecked1,
    isChecked2,
    setIsChecked2,
    isChecked3,
    setIsChecked3,
    isChecked4,
    setIsChecked4,
  } = useRememberContext();

  return (
    <div className="Setting_layout">
      {/*<div>
        <p>おぼえる数・・・</p>
        <input type="number" />
      </div>
      <h1>チェックボックスの例</h1>
      <Math_CheckBox label="チェック項目 1" checkboxNumber={1} />
      <Math_CheckBox label="チェック項目 2" checkboxNumber={2} />
      <Math_CheckBox label="チェック項目 3" checkboxNumber={3} />
      <Math_CheckBox label="チェック項目 4" checkboxNumber={4} />*/}
      <p style={{ fontSize: "128px" }}>準備中</p>
    </div>
  );
};

export default Setting;
