import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Top from "./views/Top"; // 新しく作成したHomeコンポーネントをインポート
import Game from "./views/GameScene"; // Aboutも同様に別ファイルにしている前提

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/game" element={<Game />} />
        <Route path="/" element={<Top />} />
      </Routes>
    </Router>
  );
};

export default App;
