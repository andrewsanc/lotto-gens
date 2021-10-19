import React, { useState } from "react";

const Lotto = ({ title = "Lotto", numBalls, maxNum }) => {
  const [balls, setBalls] = useState([]);

  const generateBalls = () => {
    // for (let )
  };

  const renderBalls = [1, 2, 3].forEach((ball) => {
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
