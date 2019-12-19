import React, { useReducer } from "react";
import "./App.css";
import Main from "./components/main";
import {
  reducer,
  initialState,
  ReducerContext
} from "./context/reducer-context";
import ToastManager from "./components/toast";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ReducerContext.Provider value={[state, dispatch]}>
      <ToastManager>
        <Main />
      </ToastManager>
    </ReducerContext.Provider>
  );
};

export default App;
