import React from 'react';
import SideBar from '../components/SideBar';
import DashboardBoxes from '../components/DashboardBoxes';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <SideBar />
      <DashboardBoxes />
    </div>
  );
};

export default Dashboard;
