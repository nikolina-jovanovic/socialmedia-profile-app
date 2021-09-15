import "./styles.css";
import { useState } from "react";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import Loader from "react-loader-spinner";

export default function App() {
  const [showSignUp, setShowSignUp] = useState(true);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    country: "",
    city: "",
    education: "",
    hobby: ""
  });
  const [loaderSpinner, setLoaderSpinner] = useState(false);
  const [homePage, setHomePage] = useState(false);

  //Change of an input fields:

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  //showSignUpChanger - changes signUp component (will it be displayed or not)
  //showLoaderSpinner - in SignUp component we can control loader spinner - when will it appear
  //showHomePageChanger - changes homePage component (will it be displayed or not)

  return (
    <div className="App">
      {showSignUp && (
        <SignUp
          showSignUpChanger={setShowSignUp}
          showLoaderSpinnerChanger={setLoaderSpinner}
          userInfo={userInfo}
          handleChange={handleChange}
          showHomePageChanger={setHomePage}
        />
      )}
      {loaderSpinner && (
        <Loader
          type="BallTriangle"
          color="rgb(242, 123, 12)"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "100px"
          }}
          height={150}
          width={150}
          timeout={3000} //3 secs
        />
      )}
      {homePage && (
        <HomePage
          userInfo={userInfo}
          infoChanger={setUserInfo}
          showSignUpChanger={setShowSignUp}
          showLoaderSpinnerChanger={setLoaderSpinner}
          showHomePageChanger={setHomePage}
        />
      )}
    </div>
  );
}
