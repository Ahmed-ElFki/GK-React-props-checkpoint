import React from "react";
import PropTypes from "prop-types";
import { BiInfoCircle } from "react-icons/bi";
import { BiBookBookmark } from "react-icons/bi";
import { BiDollarCircle } from "react-icons/bi";
import defaultPIC from "../imgs/ProfilePIC.png";

function Profile({ fullName, PIC, bio, profession }) {
  return (
    <>
      <div className="profile-pic-container">
        <img src={PIC} alt="profile-pic" className="profile-pic" />
      </div>

      <div className="flex-container">
        <div className="fullName-container">
          <span className="section-icon">
            <BiInfoCircle />
          </span>
          <span>{fullName}</span>
        </div>

        <div className="bio-container">
          <span className="section-icon">
            <BiBookBookmark />
          </span>
          <span>{bio}</span>
        </div>

        <div className="profession-container">
          <span className="section-icon">
            <BiDollarCircle />
          </span>
          <span>{profession}</span>
        </div>
      </div>
    </>
  );
}

Profile.defaultProps = {
  fullName: "John DOE",
  PIC: defaultPIC,
  bio: "lorem ipsum",
  profession: "Children books Writer",
};

Profile.propTypes = {
  fullName: PropTypes.string,
  PIC: PropTypes.object,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

export default Profile;
