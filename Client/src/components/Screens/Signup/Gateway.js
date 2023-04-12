import React, { useState } from "react";
import "./Main.css";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

function Gateway() {
  // State to track which card is currently being displayed
  const [card, setCard] = useState("login");

  // Function to toggle between the sign in and sign up forms
  const toggleCard = () => {
    if (card === "login") {
      setCard("signup");
    } else {
      setCard("login");
    }
  };

  return (
    <div className="gateway">
      <div className="wrapper">
        <div className="card">
          <div className="controls">
            <button onClick={toggleCard} className="btn-control-form">
              {card === "login" ? "Sign Up" : "Login"}
            </button>
          </div>
          <div className="formContainer">
            {card === "login" && <LoginForm />}
            {card === "signup" && <SignupForm />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gateway;
