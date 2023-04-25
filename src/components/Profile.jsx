import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email, phoneNumber, photoURL } = user || {};
  console.log(user);
  return (
    <div className="container">
      <img
        width={60}
        src={
          photoURL
            ? photoURL
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_oDb0Z2GsQWkWSlzpD7nXu3CGySXqfZoGALnKmvfs0w&s"
        }
        alt=""
      />
      <h5 className="mb-3 mt-2">
        Name: {displayName ? displayName : "Not Provided"}
      </h5>
      <h5 className="mb-3 mt-2">Email: {email}</h5>
      <p className="mb-3 mt-2">
        Phone: {phoneNumber ? phoneNumber : "Not Provided"}
      </p>
    </div>
  );
};

export default Profile;
