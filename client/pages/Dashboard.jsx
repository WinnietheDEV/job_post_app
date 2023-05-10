import React, { useEffect } from "react";
import { useAppContext } from "../context/appContext";

const Dashboard = () => {
  const { token } = useAppContext();
  const fetchData = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await fetch("/api/v1/jobs", config);
      console.log(response);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>Dashboard</div>;
};

export default Dashboard;
