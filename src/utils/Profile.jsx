import React from "react";
import profileImg from '../images/Nathanielle.png'

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={profileImg} alt="Profile" className="profile-image" />
      </div>
    </div>
  );
};

export default Profile;
