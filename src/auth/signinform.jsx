// SignInForm.js
import React, { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

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
      // Retrieve the name from session storage
      const userName = sessionStorage.getItem('userName');
      navigate("/Dashboard");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
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
        <button>Sign In</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default SignInForm;
