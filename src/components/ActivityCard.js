import React from "react";

const ActivityCard = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1; // JavaScript months are 0-indexed
  const date = today.getDate();
  const time = today.toLocaleTimeString();

  return (
    <div className="bg-[#161e54] text-white rounded-lg mt-5 p-2 shadow-md w-[500px] h-[258px]">
      <h2 className="text-[18px] text-white font-poppins font-[500] mb-2 bg-[#1b204a] p-2">
        Recentely Activity
      </h2>
      <h3 className="text-sm font-semibold p-2">{`${time}, ${date}/${month}/${year}`}</h3>
      <h2 className="text-[18px] text-white font-poppins font-[500] mb-2 p-2">
        You Posted a New Job
      </h2>
      <p className="text-sm text-gray-200 mt-1 pl-2">
        Kindly check the requirements and terms of work and make sure everything
        is right.{" "}
      </p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm pl-2">Today you make 12 Activity</span>
        <button className="text-lg bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-3 rounded-md">
          See All Activity
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;
