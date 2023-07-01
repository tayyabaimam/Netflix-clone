import React, { useState } from "react";
import Signup from "./Signup";
import "./Login.css";

function Login() {
  const [signin, setsignin] = useState(false);
  return (
    <div class="Login">
      <div className="loginbackground">
        <img
          className="loginlogo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button onClick={() => setsignin(true)} className="loginbutton">
          Sign In
        </button>
        <div className="logingradient" />
      </div>
      <div className="loginbody">
        {signin ? (
          <Signup />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="logininput">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setsignin(true)}
                  className="logingetstarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
