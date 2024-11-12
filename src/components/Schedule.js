import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";

const Schedule = ({ description, time }) => {
  return (
    <div className="flex flex-col bg-gray-200 rounded-lg border border-gray-400 p-4">
      <ul className="flex  items-center justify-between">
        <li className="mb-2">{description}</li>
        <div className="flex gap-2">
          <HiDotsHorizontal className="w-[24px] h-[24px]" />
        </div>
      </ul>
      <p className="font-poppins opacity-50 text-[10px]">{time}</p>
    </div>
  );
};

export default Schedule;
