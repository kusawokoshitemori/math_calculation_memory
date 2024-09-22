import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Top"; // 新しく作成したHomeコンポーネントをインポート
import About from "./GameScene"; // Aboutも同様に別ファイルにしている前提

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
