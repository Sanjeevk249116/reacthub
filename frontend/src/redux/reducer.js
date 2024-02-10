import { SignUpData, logInData } from "./actionType";

const listStates = {
  signUpData: [],
 status:0
};

function reducer(state = listStates, { type, payload }) {
 switch (type) {
    case SignUpData:
      return { ...state, status: payload };
   
    case logInData:
      return { ...state, status: payload };
   
    default:
      return state;
  }
}

export default reducer;
