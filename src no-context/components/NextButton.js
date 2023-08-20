import React from "react";

const NextButton = ({ dispatch, answer, index, numQuestions }) => {
  let btn;
  if (answer === null) return null;
  if (index < numQuestions - 1) {
    btn = (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }

  if (index === numQuestions - 1) {
    btn = (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }
  return <>{btn}</>;
};

export default NextButton;
