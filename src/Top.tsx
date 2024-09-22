import React from "react";
import { useNavigate } from "react-router-dom";
import RectangleButton from "../src/components/RectangleButton";
import titleLogo from "./images/title_logo.png";
import "./style.css";
import backgroundImage from "./images/背景_夏_涼しい.jpeg";

const Top = () => {
  const navigate = useNavigate(); // useNavigateフックを取得

  const StartClick = () => {
    navigate("/game"); // '/game'パスに移動
  };
  const SettingClick = () => {
    navigate("/setting");
  };
  return (
    <div
      className="Top_layout"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="button_container">
        <img
          src={titleLogo}
          alt="タイトルのロゴ"
          className="title_logo_image"
        />
        <RectangleButton label="START" onClick={StartClick} />
        <RectangleButton label="せってい" onClick={SettingClick} />
      </div>
    </div>
  );
};

export default Top;
