import { takeLatest, call, put } from "typed-redux-saga/macro";
import { User } from "firebase/auth";

import { USER_ACTION_TYPES } from "./user.types";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  getCurrentUser,
  signOutUser,
} from "../../utils/firebase/firebase.utils";

import {
  signOutSuccess,
  signOutFailed,
  signInFailed,
  SignUpSuccess,
  SignUpStart,
} from "./user.action";

import {
  getSnapshotFromUserAuth,
  signInWithEmail,
  signInWithGoogle,
  isUserAuthenticated,
  signOut,
  signUp,
  signInAfterSignUp,
  onEmailSignInStart,
  onGoogleSignInStart,
  onCheckUserSession,
  onSignOutStart,
  onSignUpStart,
  onSignUpSuccess,
} from "./user.saga";

describe("on sign in with email start saga", function () {
  it("should trigger on EMAIL_SIGN_IN_START", function () {
    const generator = onEmailSignInStart();
    expect(generator.next().value).toEqual(
      takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
    );
  });
});

describe("on sign in with google start saga", function () {
  it("should trigger on GOOGLE_SIGN_IN_START", function () {
    const generator = onGoogleSignInStart();
    expect(generator.next().value).toEqual(
      takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
    );
  });
});

describe("on sign out start saga", function () {
  it("should trigger on SIGN_OUT_START", function () {
    const generator = onSignOutStart();
    expect(generator.next().value).toEqual(
      takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
    );
  });
});

describe("on check user session saga", function () {
  it("should trigger on CHECK_USER_SESSION", function () {
    const generator = onCheckUserSession();
    expect(generator.next().value).toEqual(
      takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
    );
  });
});

describe("on sign up start saga", function () {
  it("should trigger on SIGN_UP_START", function () {
    const generator = onSignUpStart();
    expect(generator.next().value).toEqual(
      takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
    );
  });
});

describe("on sign up success saga", function () {
  it("should trigger on SIGN_UP_START", function () {
    const generator = onSignUpSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
    );
  });
});

describe("on sign in after sign up saga", function () {
  it("should fire getSnapshotFromUserAuth", function () {
    const mockUser = {} as User;
    const mockAdditionalData = {};
    const mockAction = {
      payload: {
        user: mockUser,
        additionalDetails: mockAdditionalData,
      },
    };

    const generator = signInAfterSignUp(mockAction as SignUpSuccess);
    expect(generator.next().value).toEqual(
      call(getSnapshotFromUserAuth, mockUser, mockAdditionalData)
    );
  });
});

describe("on sign up saga", function () {
  const mockEmail = "test123@gmail.com";
  const mockPassword = "test123";
  const mockDisplayName = "Testing";

  const mockAction = {
    payload: {
      email: mockEmail,
      password: mockPassword,
      displayName: mockDisplayName,
    },
  };

  const generator = signUp(mockAction as SignUpStart);

  it("should call createAuthUserWithEmailAndPassword", async () => {
    expect(generator.next().value).toEqual(
      call(createAuthUserWithEmailAndPassword, mockEmail, mockPassword)
    );
  });
});

describe("on sign out", function () {
  const generator = signOut();

  it("should call auth.signOut", function () {
    expect(generator.next().value).toEqual(call(signOutUser));
  });

  it("should call signOutSuccess", function () {
    expect(generator.next().value).toEqual(put(signOutSuccess()));
  });

  it("should call signOutFailure on error", function () {
    const newGenerator = signOut();
    const error = { name: "404", message: "error" } as Error;
    newGenerator.next();
    expect(newGenerator.throw(error).value).toEqual(put(signOutFailed(error)));
  });
});

describe("is user authenticated saga", function () {
  const generator = isUserAuthenticated();

  it("should call getCurrentUser", function () {
    expect(generator.next().value).toEqual(call(getCurrentUser));
  });

  it("should call getSnapshotFromUserAuth if userAuth exists", function () {
    const mockAuthUser = {
      uid: "123qax",
      displayName: "Kirill",
      email: "kirill@gmail.com",
    } as User;
    expect(generator.next(mockAuthUser).value).toEqual(
      call(getSnapshotFromUserAuth, mockAuthUser)
    );
  });

  it("should call signInFailed", function () {
    const newGenerator = isUserAuthenticated();
    const error = { name: "404", message: "error" } as Error;

    newGenerator.next();
    expect(newGenerator.throw(error).value).toEqual(put(signInFailed(error)));
  });
});

describe("get snapshot from userAuth", function () {
  const mockAuthUser = {
    uid: "123qax",
    displayName: "Kirill",
    email: "kirill@gmail.com",
  } as User;
  const mockAdditionalData = {};
  it("should call getSnapshotFromUserAuth from userAuth", function () {});
  const generator = getSnapshotFromUserAuth(mockAuthUser, mockAdditionalData);
  expect(generator.next().value).toEqual(
    call(createUserDocumentFromAuth, mockAuthUser, mockAdditionalData)
  );
});
