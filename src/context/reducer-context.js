import { createContext } from "react";
import { comaReplacer, dotReplacer } from "../utils";

export const ReducerContext = createContext(null);

export const percentageOperators = {
  from: "от",
  add: "прибавить к",
  takeAway: "отнять от"
};
export const numbersOperators = {
  greater: "больше на",
  lesser: "меньше на"
};

export const initialState = {
  percent: 1,
  number: 100,
  operator: "from",
  result: 1,
  activeInputs: ["percent", "number"]
};

const SET_PERCENT = "SET_PERCENT";
const SET_NUMBER = "SET_NUMBER";
const SET_RESULT = "SET_RESULT";
const SET_OPERATOR = "SET_OPERATOR";

const calcucaleResult = ({ percent, number, operator, result, ...rest }) =>
  operator === "from"
    ? {
        percent,
        number,
        operator,
        result: dotReplacer(
          Math.round(
            ((comaReplacer(number) * comaReplacer(percent)) / 100) * 100
          ) / 100
        ),
        ...rest
      }
    : operator === "add"
    ? {
        percent,
        number,
        operator,
        result: dotReplacer(
          Math.round(
            comaReplacer(number) * (1 + comaReplacer(percent) / 100) * 100
          ) / 100
        ),
        ...rest
      }
    : operator === "takeAway"
    ? {
        percent,
        number,
        operator,
        result: dotReplacer(
          Math.round(
            comaReplacer(number) * (1 - comaReplacer(percent) / 100) * 100
          ) / 100
        ),
        ...rest
      }
    : operator === "greater"
    ? {
        number,
        result,
        operator,
        percent: dotReplacer(
          Math.round(
            (comaReplacer(number) / comaReplacer(result) - 1) * 100 * 100
          ) / 100
        ),
        ...rest
      }
    : operator === "lesser"
    ? {
        number,
        result,
        operator,
        percent: dotReplacer(
          Math.round(
            (1 - comaReplacer(number) / comaReplacer(result)) * 100 * 100
          ) / 100
        ),
        ...rest
      }
    : { percent, number, operator, result };

export const reducer = (state = initialState, { type, payload }) => {
  Object.freeze(state);
  switch (type) {
    case SET_NUMBER: {
      const newState = { ...state, number: payload };
      return calcucaleResult(newState);
    }
    case SET_PERCENT: {
      const newState = { ...state, percent: payload };
      return calcucaleResult(newState);
    }
    case SET_RESULT: {
      const newState = { ...state, result: payload };
      return calcucaleResult(newState);
    }
    case SET_OPERATOR: {
      if (!payload) return state;
      const newState = {
        ...state,
        operator: payload,
        activeInputs:
          payload === "greater" || payload === "lesser"
            ? ["number", "result"]
            : ["percent", "number"]
      };
      return calcucaleResult(newState);
    }
    default:
      return state;
  }
};

export const setNumber = payload => ({ type: SET_NUMBER, payload });
export const setPercent = payload => ({ type: SET_PERCENT, payload });
export const setResult = payload => ({ type: SET_RESULT, payload });
export const setOperator = payload => ({ type: SET_OPERATOR, payload });
