import {
  CHESS_LOADING,
  CHESS_SUCCESS,
  CSV_FILE,
  RATING_HISTORY,
  SignUpData,
  logInData,
} from "./actionType";
import axios from "axios";

const hostApi = "https://reacthub.onrender.com";

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
    dispatch({ type: CHESS_LOADING });
    const response = await axios.get(`${hostApi}/top-players?page=${pages}`);
    dispatch({ type: CHESS_SUCCESS, payload: response.data });
  } catch (err) {
    console.log("error in fetching chess data");
  }
};

export const ratingHistoryData = (username) => async (dispatch) => {
  try {
    dispatch({ type: CHESS_LOADING });
    const response = await axios.get(
      `${hostApi}/player/${username}/rating-history`
    );
    dispatch({ type: RATING_HISTORY, payload: response.data });
  } catch (err) {
    console.log("error in fetching chess data");
  }
};

export const csv_ratingHistoryData = () => async (dispatch) => {
  console.log("hell");
  try {
    const response = await axios.get(`${hostApi}/players/rating-history-csv`);
    dispatch({ type: CSV_FILE, payload: response.data });
    
  } catch (err) {
    console.log("error in fetching csv data");
  }
};
