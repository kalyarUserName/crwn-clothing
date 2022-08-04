import { USER_INITIAL_STATE, userReducer } from "./user.reducer";

import {
  signInSuccess,
  signOutSuccess,
  signInFailed,
  signUpFailed,
  signOutFailed,
} from "./user.action";
import { AnyAction } from "redux";
import { USER_ACTION_TYPES } from "./user.types";

describe("userReducer", () => {
  it("should return initial state", () => {
    expect(userReducer(undefined, {} as AnyAction)).toEqual(USER_INITIAL_STATE);
  });

  it("should set currentUser to payload on signInSuccess", () => {
    const mockUser = { id: 1, displayName: "Kirill" };
    expect(
      userReducer(USER_INITIAL_STATE, {
        type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
        payload: mockUser,
      }).currentUser
    ).toEqual(mockUser);
  });

  it("should set currentUser to payload on signInSuccess 2", () => {
    const mockUser = {
      id: "1",
      displayName: "Kirill",
      createdAt: new Date(),
      email: "kirill@gmail.com",
    };
    expect(
      userReducer(USER_INITIAL_STATE, signInSuccess(mockUser)).currentUser
    ).toEqual(mockUser);
  });

  it("should set currentUser to null on signOutSuccess", () => {
    expect(userReducer(USER_INITIAL_STATE, signOutSuccess()).currentUser).toBe(
      null
    );
  });

  it("should set errorMessage to payload on signInFailed,  signUpFailed, signOutFailed", () => {
    const mockError = {
      message: "errored",
      code: 404,
      name: "Error",
    };
    expect(
      userReducer(USER_INITIAL_STATE, signInFailed(mockError)).error
    ).toEqual(mockError);
    expect(
      userReducer(USER_INITIAL_STATE, signUpFailed(mockError)).error
    ).toEqual(mockError);
    expect(
      userReducer(USER_INITIAL_STATE, signOutFailed(mockError)).error
    ).toEqual(mockError);
  });
});
