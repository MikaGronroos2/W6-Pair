import { useSignup } from "../hooks/useSignup";
import { useField } from "../hooks/useField"

const SignupComponent = ({ setIsAuthenticated }) => {
  const emailInput = useField("text");
  const passwordInput = useField("password")
  const passwordConfirmInput = useField("password")
  const email = emailInput.value
  const password = passwordInput.value
  const passwordConfirm = passwordConfirmInput.value
  const { handleSignup } = useSignup({ setIsAuthenticated, email, password, passwordConfirm });
  return (
    <div>
      <h2>Signup</h2>
      <label>
        email:
        <input
          {...emailInput}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          {...passwordInput}
        />
      </label>
      <br />
      <label>
        Confirm password:
        <input
          {...passwordConfirmInput}
        />
      </label>
      <br />
      <button onClick={handleSignup}>Sign In</button>
    </div>
  );
};

export default SignupComponent;
