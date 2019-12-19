import React, { useReducer } from "react";
import "./App.css";
import Main from "./components/main";
import { reducer, initialState, PercenterContext } from "./context/reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PercenterContext.Provider value={[state, dispatch]}>
      <Main />
    </PercenterContext.Provider>
  );
};

export default App;
