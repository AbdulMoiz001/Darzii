import React from "react";
import "./Profile.css";

const Profile = ({ tailor }) => {
  return (
    <div className="tailor-card">
      <div className="tailor-info">
        <h2>{tailor.TailorName}</h2>
        <p>
            <span>Contact:</span> {tailor.TailorContactNumber}
        </p>
        <p>
          <span>Name:</span> {tailor.firstName} {tailor.lastName}
        </p>
        <p>
          <span>Email:</span> {tailor.email}
        </p>
        <p>
          <span>CINC:</span> {tailor.cinc}
        </p>
        <p>
          <span>Address:</span> {tailor.address}
        </p>
        <p>
          <span>Skill:</span> {tailor.skill}
        </p>
      </div>
      <div className="foot-note">
        * For any information update contact the Admin at +923155546431
      </div>
    </div>
  );
};

export default Profile;
