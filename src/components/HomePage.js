import React, { useState } from "react";
import Form from "./Form";
import MyProfile from "./MyProfile";

const HomePage = ({
  userInfo,
  infoChanger,
  showSignUpChanger,
  showHomePageChanger
}) => {
  const [showProfile, setShowProfile] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Clicking on Profile button modal box is appearing which contains all information about profile.

  const myProfileFun = () => {
    setShowProfile(true);
  };

  return (
    <div>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li onClick={myProfileFun}>
          <a style={{ width: "120px" }} href="#profile">
            Profile &nbsp;
            <img
              style={{
                margin: "auto",
                borderRadius: "50%",
                border: "0px",
                marginTop: "-4px"
              }}
              alt="pp"
              src={
                selectedImage === null
                  ? "pp.png"
                  : URL.createObjectURL(selectedImage)
              }
              width={"33px"}
              height={"30px"}
            />
          </a>
        </li>
        <li
          className="logOut"
          style={{
            float: "right",
            border: "1px solid rgb(242, 123, 12)",
            borderRadius: "10px"
          }}
        >
          <a
            onClick={() => {
              showSignUpChanger(true);
              showHomePageChanger(false);
              infoChanger({
                ...userInfo,
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
            }}
            href="#logOut"
          >
            Log Out
          </a>
        </li>
      </ul>
      <Form />
      {showProfile && (
        <MyProfile
          userInfo={userInfo}
          showProfileChanger={setShowProfile}
          infoChanger={infoChanger}
          imageChanger={setSelectedImage}
          selectedImage={selectedImage}
        />
      )}
    </div>
  );
};

export default HomePage;
