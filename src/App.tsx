import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Top from "./Top"; // 新しく作成したHomeコンポーネントをインポート
import Game from "./GameScene"; // Aboutも同様に別ファイルにしている前提
import RectangleButton from "../src/components/RectangleButton";

const App = () => {
  return (
    <Router>
      {/* 表示用 */}
      <RectangleButton />
      {/* ここまで */}
      <Routes>
        <Route path="/game" element={<Game />} />
        <Route path="/" element={<Top />} />
      </Routes>
    </Router>
  );
};

export default App;
