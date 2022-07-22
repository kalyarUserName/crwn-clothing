import { AnyAction } from "redux";
import {
  signInSuccess,
  signInFailed,
  signUpFailed,
  signOutSuccess,
  signOutFailed,
} from "./user.action";
import { UserData } from "../../utils/firebase/firebase.utils";

export type UserState = {
  currentUser: UserData | null;
  isLoading: boolean;
  error: Error | null;
};

export const USER_INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action))
    return { ...state, currentUser: action.payload };

  if (signInFailed.match(action)) return { ...state, error: action.payload };

  if (signOutSuccess.match(action)) return { ...state, currentUser: null };

  if (signOutFailed.match(action)) return state;

  if (signUpFailed.match(action)) return { ...state, error: action.payload };

  return state;
};
