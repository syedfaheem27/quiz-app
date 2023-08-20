import { useReducer } from "react";
const initialState = {
  count: 0,
  step: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "set":
      return { count: action.payload.count, step: action.payload.step };
    case "reset":
      return initialState;
    default:
      throw new Error("No action found");
  }
}

function DateCounter() {
  const [inputVal, dispatch] = useReducer(reducer, initialState);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + inputVal.count);

  const dec = function () {
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    dispatch({
      type: "set",
      payload: {
        count: Number(e.target.value),
        step: inputVal.step,
      },
    });
  };

  const defineStep = function (e) {
    dispatch({
      type: "set",
      payload: {
        count: inputVal.count,
        step: Number(e.target.value),
      },
    });
  };

  const reset = function () {
    dispatch({
      type: "rteset",
    });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={inputVal.step}
          onChange={defineStep}
        />
        <span>{inputVal.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={inputVal.count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
