//cssの競合が起きたため終了。Reactの基本的な考え方(親コンポーネントに要素を入れる。cssの書き方などのことを調べて他の物を制作してみる)
//未来のオレ頑張ってくれ。私は疲れた。自分ならできる。ワイには応援することしかできないけど... こんなの書いてる暇あったら勉強しよ

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Top from "./views/Top"; // 新しく作成したHomeコンポーネントをインポート
import Game from "./views/GameScene"; // Aboutも同様に別ファイルにしている前提
import Setting from "./views/Setting";
import Result from "./views/Result";

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
