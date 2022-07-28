import SignInForm from "../../components/signInForm/signInForm.component";
import SignUpForm from "../../components/signUpForm/signUpForm.component";

import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
