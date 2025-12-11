// src/actions/authActions.js
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const listenToAuthChanges = () => (dispatch) => {
  dispatch({ type: "AUTH_START" });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch({
        type: "AUTH_SET_USER",
        payload: { uid: user.uid, email: user.email },
      });
    } else {
      dispatch({ type: "AUTH_SET_USER", payload: null });
    }
  });
};

export const registerUser = (email, password) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    dispatch({
      type: "AUTH_SUCCESS",
      payload: { uid: cred.user.uid, email: cred.user.email },
    });
  } catch (err) {
    dispatch({ type: "AUTH_ERROR", payload: err.message });
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    dispatch({
      type: "AUTH_SUCCESS",
      payload: { uid: cred.user.uid, email: cred.user.email },
    });
  } catch (err) {
    dispatch({ type: "AUTH_ERROR", payload: err.message });
  }
};

export const logoutUser = () => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    await signOut(auth);
    dispatch({ type: "AUTH_LOGOUT" });
  } catch (err) {
    dispatch({ type: "AUTH_ERROR", payload: err.message });
  }
};
