import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Top from "./views/Top"; // 新しく作成したHomeコンポーネントをインポート
import Game from "./views/GameScene"; // Aboutも同様に別ファイルにしている前提
import Setting from "./views/Setting";
import Result from "./views/Result";
import { RememberProvider } from "./context/RememberContext";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/game" element={<Game />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
};

export default App;
