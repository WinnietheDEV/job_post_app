import React, { useState } from "react";
import Wrapper from "../src/assets/wrappers/Navbar";
import { FaAlignLeft, FaCaretDown, FaHome, FaUserCircle } from "react-icons/fa";
import Logo from "./Logo";
import { useAppContext } from "../context/appContext";

const Navbar = () => {
  const { toggleSidebar, toggleDropDown, dropDown, logout, user } =
    useAppContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <button
          className="toggle-btn"
          type="button"
          onClick={() => toggleSidebar()}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo></Logo>
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => toggleDropDown()}
          >
            <FaUserCircle />

            {user?.name}
            <FaCaretDown />
          </button>
          <div className={dropDown ? "dropdown show-dropdown" : "dropdown"}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => logout()}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
