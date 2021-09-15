import React, { useState } from "react";

const MyProfile = ({
  userInfo,
  showProfileChanger,
  infoChanger,
  imageChanger,
  selectedImage
}) => {
  const [showProfileInfo, setShowProfileInfo] = useState(true);
  const [editProfileInfo, setEditProfileInfo] = useState(false);
  // User info copy is made so user can edit it and save it later:
  const [userInfoCopy, setUserInfoCopy] = useState({
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    email: userInfo.email,
    password: userInfo.password,
    dateOfBirth: userInfo.dateOfBirth,
    country: userInfo.country,
    city: userInfo.city,
    education: userInfo.education,
    hobby: userInfo.hobby
  });

  const editProfile = () => {
    setShowProfileInfo(false);
    setEditProfileInfo(true);
  };

  const goBack = () => {
    setEditProfileInfo(false);
    setShowProfileInfo(true);
  };

  const handleChangeInfo = (e) => {
    setUserInfoCopy({ ...userInfoCopy, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    infoChanger(userInfoCopy);
    // console.log(submitClicked);
    // console.log(userInfo.firstName);
    goBack();
  };
  
  //Importing an image from a computer:
  const changingImage = (e) => {
    imageChanger(e.target.files[0]);
  };

  return (
    <div>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span
              className="close"
              onClick={() => {
                showProfileChanger(false);
              }}
            >
              &times;
            </span>
            <h2>{userInfo.firstName}'s Profile</h2>
          </div>
          <div className="modal-body">
            {showProfileInfo && (
              <>
                <div style={{ display: "inline" }}>
                  {selectedImage === null && (
                    <img
                      width={"230px"}
                      height={"200px"}
                      src="pp.png"
                      alt="profile-pic"
                    />
                  )}

                  {selectedImage && (
                    <div style={{ display: "inline", position: "fixed" }}>
                      <img
                        width={"230px"}
                        height={"200px"}
                        alt="not found"
                        value={selectedImage}
                        src={URL.createObjectURL(selectedImage)}
                      />
                      <br />
                      <button
                        className="buttons"
                        style={{ position: "fixed", marginTop: "220px" }}
                        onClick={() => {
                          imageChanger(null);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  )}
                  <br />

                  <br />
                  <label
                    className="buttons"
                    style={{
                      position: "fixed",
                      marginTop: "240px",
                      width: "80px",
                      textAlign: "center"
                    }}
                  >
                    {" "}
                    📷
                    <input
                      type="file"
                      name="myImage"
                      onChange={changingImage}
                    />
                  </label>
                </div>

                <div className="userInfo">
                  <br />
                  <h4>Name:</h4>
                  <h4 style={{ color: "white" }}>{userInfo.firstName}</h4>
                  <br />
                  <h4>Last Name:</h4>
                  <h4 style={{ color: "white" }}>{userInfo.lastName}</h4>
                  <br />
                  <div>
                    <h4>Email:</h4>
                    <h4 style={{ color: "white" }}>{userInfo.email}</h4>
                    <br />
                    {userInfo.dateOfBirth.length > 0 && (
                      <>
                        <h4>Date of birth:</h4>
                        <h4 style={{ color: "white" }}>
                          {userInfo.dateOfBirth}
                        </h4>
                        <br />
                      </>
                    )}
                    {userInfo.country.length > 0 && (
                      <>
                        <h4>Country:</h4>
                        <h4 style={{ color: "white" }}>{userInfo.country}</h4>
                        <br />
                      </>
                    )}
                    {userInfo.city.length > 0 && (
                      <>
                        <h4>City:</h4>
                        <h4 style={{ color: "white" }}>{userInfo.city}</h4>
                        <br />
                      </>
                    )}
                    {userInfo.education.length > 0 && (
                      <>
                        <h4>Education:</h4>
                        <h4 style={{ color: "white" }}>{userInfo.education}</h4>
                        <br />
                      </>
                    )}
                    {userInfo.hobby.length > 0 && (
                      <>
                        <h4>Hobby:</h4>
                        <h4 style={{ color: "white" }}>{userInfo.hobby}</h4>
                        <br />
                      </>
                    )}
                    <button
                      className="buttons"
                      style={{ width: "200px", margin: "10px" }}
                      onClick={editProfile}
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>
              </>
            )}
            {editProfileInfo && (
              <div style={{ padding: "5px" }}>
                <button
                  className="buttons"
                  style={{
                    fontSize: "35px",
                    float: "left",
                    padding: "2px",
                    marginTop: "3px"
                  }}
                  onClick={goBack}
                >
                  ⬅
                </button>
                <div className="editInfo">
                  <form>
                    <h4>First Name:</h4>
                    <input
                      type="text"
                      className="input-signup"
                      value={userInfoCopy.firstName}
                      onChange={handleChangeInfo}
                      name="firstName"
                    />
                    <h4>Last Name:</h4>
                    <input
                      type="text"
                      className="input-signup"
                      value={userInfoCopy.lastName}
                      name="lastName"
                      onChange={handleChangeInfo}
                    />
                    <h4>Date of birth:</h4>
                    <input
                      type="date"
                      className="input-signup"
                      value={userInfoCopy.dateOfBirth}
                      name="dateOfBirth"
                      onChange={handleChangeInfo}
                    />
                    <h4>Country:</h4>
                    <input
                      type="text"
                      className="input-signup"
                      value={userInfoCopy.country}
                      name="country"
                      onChange={handleChangeInfo}
                    />
                    <h4>City:</h4>
                    <input
                      type="text"
                      className="input-signup"
                      value={userInfoCopy.city}
                      name="city"
                      onChange={handleChangeInfo}
                    />
                    <h4>Education:</h4>
                    <input
                      type="text"
                      className="input-signup"
                      value={userInfoCopy.education}
                      name="education"
                      onChange={handleChangeInfo}
                    />
                    <h4>Hobby:</h4>
                    <input
                      type="text"
                      className="input-signup"
                      value={userInfoCopy.hobby}
                      name="hobby"
                      onChange={handleChangeInfo}
                    />
                  </form>
                  <button
                    style={{
                      margin: "10px",
                      marginLeft: "70px",
                      width: "200px"
                    }}
                    onClick={saveChanges}
                    className="buttons"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
