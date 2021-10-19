import React from "react";
import Lotto from "./Lotto";
import "./App.css";

const App = () => {
  return (
    <div class='app'>
      <Lotto numBalls={6} maxNum={40} />
    </div>
  );
};

export default App;
