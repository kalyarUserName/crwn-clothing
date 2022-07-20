import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../formInput/formInput.component";
import Button from "../button/button.component";

import { SignUpContainer } from "./signUpForm.styles";
import { signUpStart } from "../../store/user/user.action";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match ");
      return;
    }
    try {
      // const { user } = await createAuthUserWithEmailAndPassword(
      //   email,
      //   password
      // );
      // await createUserDocumentFromAuth(user, { displayName });

      dispatch(signUpStart(email, password, displayName));
      console.log("FORM says", { email, password, displayName });

      resetFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("Cannot create user, email already in use");
          break;
        default:
          console.log("user created encountered an error", error);
      }
    }
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          onChange={handleChange}
          type="text"
          required
          name="displayName"
          value={displayName}
        />
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
        <FormInput
          label="Confirm password"
          onChange={handleChange}
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit" buttonType="inverted">
          Sign up
        </Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
