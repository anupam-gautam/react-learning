import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "ToggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

export const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "ToggleShowText" });
        }}
      >
        Click Here
      </button>

      {state.showText && <h1>Hello World</h1>}
    </div>
  );
};
