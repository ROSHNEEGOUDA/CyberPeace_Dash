import React, { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { FaGoogle, FaGithub, FaLinkedinIn } from "react-icons/fa";

function SignInForm() {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [state, setState] = useState({
    email: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = state; // Destructure email and password from state
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Store the email in session storage
      sessionStorage.setItem('userEmail', email);
      navigate("/Dashboard");
    } catch (error) {
      setErrorMessage(error.message);
    }
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
        <a href="">Forgot your password?</a>
        <button>Sign In</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default SignInForm;
