import React, { useRef } from "react";
import { auth, createUserWithEmailAndPassword } from "../firebase";

import "./signup.css";

function Signup() {
  //this helps us point to an initial value
  //useref is used to create values that do not change when component is re-rendered
  //when value is changed it does not re-render
  //use reference stores info of side-effects
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signin}>
          Sign In
        </button>
        <h4>
          <span className="signupgray">New to Netflix?</span>
          <span className="link" onClick={register}>
            Sign up Now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default Signup;
