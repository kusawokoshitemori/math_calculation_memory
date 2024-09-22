import React from "react";
import "./component.css"; // components.cssをインポート

interface RectangleButtonProps {
  label: string; // ボタンに表示するラベルの型
  onClick: () => void; // ボタンがクリックされたときに呼び出される関数の型
}

const RectangleButton: React.FC<RectangleButtonProps> = ({
  label,
  onClick,
}) => {
  return <button onClick={onClick}>{label}</button>;
};

export default RectangleButton;
