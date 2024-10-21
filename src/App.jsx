import Header from "./components/Header";
import MainGame from "./components/MainGame";

import { useState } from "react";

import "./style/Main.scss";

function App() {
  const [clickedImages, setClickedImages] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  return (
    <>
      <Header clickedImages={clickedImages} bestScore={bestScore} />
      <MainGame
        clickedImages={clickedImages}
        setClickedImages={setClickedImages}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </>
  );
}

export default App;
