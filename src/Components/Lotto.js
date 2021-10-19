import React, { useState } from "react";

const Lotto = ({ title = "Lotto", numBalls, maxNum }) => {
  const [lottoBalls, setLottoBalls] = useState([]);

  const generateBalls = () => {
    let newLottoBalls = [];
    for (let i = 0; i < numBalls; i++) {
      let ballNumber = Math.floor(Math.random() * (maxNum - 1) + 1);
      newLottoBalls.push(ballNumber);
    }
    setLottoBalls(newLottoBalls);
  };

  const renderBalls = lottoBalls.map((ball) => {
    return <div>{ball}</div>;
  });

  return (
    <div>
      <h4>{title}</h4>
      {renderBalls}
      <button onClick={() => generateBalls()}>Generate</button>
    </div>
  );
};

export default Lotto;
