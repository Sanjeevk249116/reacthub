import {
  CHESS_LOADING,
  CHESS_SUCCESS,
  SignUpData,
  logInData,
} from "./actionType";

const listStates = {
  signUpData: [],
  status: 0,
  chessValue: [],
  isLoading: false,
};

function reducer(state = listStates, { type, payload }) {
 switch (type) {
    case SignUpData:
      return { ...state, status: payload };

    case logInData:
      return { ...state, status: payload };

    case CHESS_LOADING:
      return { ...state, isLoading: true };

    case CHESS_SUCCESS:
      return { ...state, chessValue: payload, isLoading: false };

    default:
      return state;
  }
}

export default reducer;
