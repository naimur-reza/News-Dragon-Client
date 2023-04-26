import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import css from "./ProfileLayout/Profile.css";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
const Profile = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email, phoneNumber, photoURL } = user || {};
  console.log(user);
  return (
    <div className="shadow rounded mx-auto my-5 w-fit">
      {/* <div className=" bg-primary h-150">d</div> */}
      <div className="p-4  ">
        <div className="">
          <img
            width={70}
            height={70}
            className="rounded-circle mx-auto m-fit d-block "
            src={
              photoURL
                ? photoURL
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_oDb0Z2GsQWkWSlzpD7nXu3CGySXqfZoGALnKmvfs0w&s"
            }
            alt=""
          />
        </div>
        <h5 className="mb-3 mt-2 bg-white">{displayName ? displayName : ""}</h5>
        <h5 className="mb-3 mt-2">
          <FaEnvelope /> : {email}
        </h5>
        <p className="mb-3 mt-2 fw-semibold">
          <FaPhone /> : {phoneNumber ? phoneNumber : "Not Provided"}
        </p>
        <div className="d-flex gap-3 justify-content-center align-items-center">
          <FaFacebook className="fit-icon text-primary" />
          <FaInstagram className="fit-icon text-danger" />
          <FaTwitter className="fit-icon text-primary" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
