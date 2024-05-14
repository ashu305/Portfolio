import { ADD_TEST_DATA } from "./Actions";

const Reducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_TEST_DATA:
      return {
        ...state,
        test: action.data,
      };
    default:
      return state;
  }
};
export default Reducer;
