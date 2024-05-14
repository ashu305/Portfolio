import React, { useReducer } from "react";
import Reducer from "./Reducer";
import { ADD_TEST_DATA } from "./Actions";

const initialState = {
  test: {},
};

const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const addTestData = (data) => {
    dispatch({ type: ADD_TEST_DATA, data: data });
  };

  return (
    <>
      <AppContext.Provider value={{ ...state, addTestData }}>{children}</AppContext.Provider>
    </>
  );
}

export { AppContextProvider, AppContext, initialState };
