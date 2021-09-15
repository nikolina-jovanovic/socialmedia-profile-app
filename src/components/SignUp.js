import React from "react";

const SignUp = ({
  userInfo,
  handleChange,
  showSignUpChanger,
  showLoaderSpinnerChanger,
  showHomePageChanger
}) => {
  return (
    <div className="signUp">
      <h1 style={{ fontFamily: "Architects Daughter", marginTop: "20px" }}>
        Sign up here!
      </h1>
      <div className="content-signup">
        <input
          onChange={handleChange}
          value={userInfo.firstName}
          name="firstName"
          className="input-signup"
          type="text"
          placeholder="First name..."
          autoFocus
          required
        />
        <br />
        <input
          onChange={handleChange}
          value={userInfo.lastName}
          name="lastName"
          className="input-signup"
          type="text"
          placeholder="Last name..."
          required
        />
        <br />
        <input
          onChange={handleChange}
          name="email"
          value={userInfo.email}
          className="input-signup"
          type="email"
          placeholder="email"
          required
        />
        <br />
        <input
          onChange={handleChange}
          value={userInfo.password}
          name="password"
          className="input-signup"
          type="password"
          placeholder="password"
          required
        />
        <br />
        <button
          onClick={() => {
            if (
              userInfo.firstName.length > 0 &&
              userInfo.lastName.length > 0 &&
              userInfo.email.length > 0 &&
              userInfo.email.includes("@") &&
              userInfo.password.length > 8
            ) {
              showSignUpChanger(false);
              showLoaderSpinnerChanger(true);
              setTimeout(() => {
                showHomePageChanger(true);
                showLoaderSpinnerChanger(false);
              }, 4000);
            } else {
              alert(
                "Fill out all fields to proceed,please. Make sure your password has minimum length of 8 characters and email address is valid."
              );
            }
          }}
          className="buttons"
          style={{ width: "120px" }}
        >
          Sign Up
        </button>
        <h3>or</h3>
        <br />
        <button className="buttons" style={{ width: "90px" }}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignUp;
