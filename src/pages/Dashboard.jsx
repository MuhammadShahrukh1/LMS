import React from 'react';
import Sidebar from '../components/Sidebar';
import CardItem from '../components/CardItem';
import './dashboard.css'
// import checkSection from '../lib/checkSession';

const Dashboard = () => {
  let currentuser = JSON.parse(localStorage.getItem('currentUser'));
  return (
    <div className="flex flex-col bg-blue-50 min-h-screen">
      <Sidebar />
      <div className="px-4 py-20 md:p-6 overview md:w-full">
        <div className="md:flex justify-between items-center mb-6 hidden">
          <h1 className="text-2xl font-bold p-3 text-blue-500">Customer Dashboard</h1>
          {/* <button className="text-blue-600 hover:underline">Sign Out</button> */}
        </div>

        <div className="bg-white mt-3 md:mt-0 px-4 py-6 mb-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-gray-600">Welcome, {currentuser.username}</h2>
          <p className="text-gray-500 font-normal">Thank you for using our platform. Here's an overview of your account.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 mt-8">
          <CardItem title="Active Loans" value="0" description="Good Standing" color="text-green-600" />
          <CardItem title="Approved Loans" value="0" description="$0.00" />
          <CardItem title="Pending Requests" value="0" description="N/A" />
          <CardItem title="References" value="0" description="Not Verified" color="text-red-600" />
        </div>

        <div className="bg-white p-6 text-center rounded-lg shadow-xl mt-8">
          <p className="text-gray-600 mb-4">No recent activity to display.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Apply for a New Loan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
