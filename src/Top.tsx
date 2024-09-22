import React from "react";
import { useNavigate } from "react-router-dom";
import RectangleButton from "../src/components/RectangleButton";
import "./style.css";

const Top = () => {
  const navigate = useNavigate(); // useNavigateフックを取得

  const StartClick = () => {
    navigate("/game"); // '/game'パスに移動
  };
  const SettingClick = () => {
    navigate("/setting");
  };
  return (
    <div className="button_container">
      <RectangleButton label="START" onClick={StartClick} />
      {/*<RectangleButton label="せってい" onClick={SettingClick} />*/}
    </div>
  );
};

export default Top;
