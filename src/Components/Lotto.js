import React, { useState, useEffect } from "react";
import Ball from "./Ball";
import "./Lotto.css";

const Lotto = ({ title = "Lotto", numBalls, maxNum }) => {
  const [lottoBalls, setLottoBalls] = useState([]);

  useEffect(() => {
    generateBalls();
  }, []);

  const generateBalls = () => {
    let newLottoBalls = [];
    for (let i = 0; i < numBalls; i++) {
      let ballNumber = Math.floor(Math.random() * (maxNum - 1) + 1);
      newLottoBalls.push(ballNumber);
    }
    setLottoBalls(newLottoBalls);
  };

  const renderBalls = lottoBalls.map((num) => {
    return <Ball num={num} />;
  });

  return (
    <div className='container'>
      <h4>{title}</h4>
      <div className='lotto-balls'>{renderBalls}</div>
      <button className='button' onClick={() => generateBalls()}>
        Generate
      </button>
    </div>
  );
};

export default Lotto;
