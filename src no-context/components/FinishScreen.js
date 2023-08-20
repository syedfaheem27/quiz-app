import React from "react";

const FinishScreen = ({ points, totalPoints, highscore, dispatch }) => {
  const percentScored = (points / totalPoints) * 100;
  let emoji;
  if (percentScored === 100) emoji = "🥇";
  if (percentScored >= 80 && percentScored < 100) emoji = "🥳";
  if (percentScored >= 50 && percentScored < 80) emoji = "🙂";
  if (percentScored > 0 && percentScored < 50) emoji = "🥲";
  if (percentScored === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {totalPoints} ({Math.round(percentScored)}%)
      </p>
      <p className="highscore">( Highscore: {highscore} points )</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
};

export default FinishScreen;
