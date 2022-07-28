import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../formInput/formInput.component";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";

import { SignInContainer, ButtonsContainer } from "./signInForm.styles";

import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.action";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormField();
    } catch (error) {
      console.log("user sign in failed", error);
      //
      // switch (error.code) {
      //   case "auth/wrong-password":
      //     alert("incorrect password for email");
      //     break;
      //   case "auth/user-not-found":
      //     alert("no user associated with this email");
      //     break;
      //   default:
      //     console.log(error);
      // }
    }
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          onChange={handleChange}
          type="email"
          required
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          onChange={handleChange}
          type="password"
          required
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit" buttonType={BUTTON_TYPES_CLASSES.inverted}>
            Sign in
          </Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPES_CLASSES.google}
          >
            Google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
