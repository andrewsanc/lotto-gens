import React from "react";
import Lotto from "./Lotto";
import "./App.css";

const App = () => {
  return (
    <div class='app'>
      <Lotto numBalls={6} maxNum={40} />
      <Lotto title='Mini Daily' numBalls={4} maxNum={20} />
    </div>
  );
};

export default App;
