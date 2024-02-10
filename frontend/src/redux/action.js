import {
  CHESS_LOADING,
  CHESS_SUCCESS,
  RATING_HISTORY,
  SignUpData,
  logInData,
} from "./actionType";
import axios from 'axios'

const hostApi = "http://localhost:8080";


export const signUpPost = (el) => async (dispatch) => {
  try {
    const response = await fetch(`${hostApi}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(el),
    });
    dispatch({ type: SignUpData, payload: response.status });
  } catch (err) {
    console.log("error in signUpData");
  }
};

export const logInPost = (el) => async (dispatch) => {
  try {
    const response = await fetch(`${hostApi}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(el),
    });
    dispatch({ type: logInData, payload: response.status });
  } catch (err) {
    console.log("error in logInData");
  }
};

export const chessGeting = (pages) => async (dispatch) => {
  try {
   dispatch({type:CHESS_LOADING})
    const response = await axios.get(`${hostApi}/top-players?page=${pages}`);
   dispatch({ type: CHESS_SUCCESS, payload: response.data });
  } catch (err) {
    console.log("error in fetching chess data");
  }
};

export const ratingHistoryData = (username) => async (dispatch) => {
  try {
   dispatch({type:CHESS_LOADING})
    const response = await axios.get(`${hostApi}/player/${username}/rating-history`);
   dispatch({ type: RATING_HISTORY, payload: response.data });
  } catch (err) {
    console.log("error in fetching chess data");
  }
};
