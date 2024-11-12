// src/pages/Dashboard.js
import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import ActivityCard from "../components/ActivityCard";
import AnnouncementCard from "../components/AnnouncementCard";
import Card from "../components/Card";
import ScheduleCard from "../components/ScheduleCard";

const Dashboard = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <main className="flex flex-col p-6 bg-gray-50 w-full">
        <Header />
        <h1 className="pt-5 font-poppins text-[30px] font-[500] ml-10">
          Dashboard
        </h1>
        <div className="flex gap-20 justify-between">
          <div className="ml-10 flex flex-col gap-5">
            <div className="flex gap-4 mt-5">
              <StatCard
                title="Available Position"
                value="24"
                description="4 Urgently needed"
                color="bg-orange-100"
              />
              <StatCard
                title="Job Open"
                value="10"
                description="4 Active hiring"
                color="bg-blue-100"
              />
              <StatCard
                title="New Employees"
                value="24"
                description="4 Departments"
                color="bg-pink-100"
              />
            </div>
            <div className="flex gap-14 ">
              <Card
                title={"Total Empolyees"}
                total={216}
                men={120}
                women={96}
                changePercentage={+2}
              />
              <Card
                title={"Talent Request"}
                total={16}
                men={6}
                women={10}
                changePercentage={+5}
              />
            </div>
            <AnnouncementCard title={"Announcement"} />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col mr-40">
              <ActivityCard />
            </div>
            <ScheduleCard title={"Upcoming Schedule"} />
          </div>
        </div>
        {/* Additional sections for Recent Activity, Announcements, Upcoming Schedule */}
      </main>
    </div>
  );
};

export default Dashboard;
