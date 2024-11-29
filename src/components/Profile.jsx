import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import avatarImg from "/images/avatar.jpg";
import {Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { TbTruckDelivery } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";

const Profile = ({ user}) => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate()

  // logout
  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="drawer drawer-end z-50">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {user.photoURL? <img alt="" src={user.photoURL} /> : <img alt="" src={avatarImg} />}
              
            </div>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a href="/update-profile"><CgProfile/> Profile</a>
            </li>
            <li>
              <a href="/order"><TbTruckDelivery /> Order</a>
            </li>
            <li>
              <a><IoSettingsSharp /> Settings</a>
            </li>
             <li>
                 <Link to="/dashboard">
                    <MdDashboard /> Dashboard
                   </Link>
              </li>
            <li>
              <a onClick={handleLogout}><TbLogout2 /> Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
