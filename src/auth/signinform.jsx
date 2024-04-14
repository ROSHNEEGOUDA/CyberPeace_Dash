import React from "react";
import { FaGoogle, FaGithub, FaLinkedinIn } from "react-icons/fa";

function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { email, password } = state;
    alert(`You are login with email: ${email} and password: ${password}`);

    setState({
      email: "",
      password: ""
    });
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        {/* <div className="social-container">
          <a href="#" className="social">
            <FaGoogle />
          </a>
          <a href="#" className="social">
            <FaGithub />
          </a>
          <a href="#" className="social">
            <FaLinkedinIn />
          </a>
        </div>
        <span>or use your account</span> */}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
