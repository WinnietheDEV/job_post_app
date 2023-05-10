import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import Wrapper from "../../src/assets/wrappers/SharedLayout";
import { Navbar, BigSidebar, SmallSidebar, Logo } from "../../components/index";
import { useAppContext } from "../../context/appContext";

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
