import React from "react";
import Text from "./Text";
import Schedule from "./Schedule";

const ScheduleCard = ({ title }) => {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1; // JavaScript months are 0-indexed
  const date = today.getDate();

  return (
    <div className="p-4 bg-white rounded-lg shadow-md h-[460px] w-[500px] border border-gray-400 flex flex-col gap-2">
      <h3 className="text-lg font-semibold mb-4 flex justify-between">
        {title} <span>{`${date}/${month}/${year}`}</span>
      </h3>
      <p className="text-[12px] font-poppins opacity-50">Priority</p>
      <Schedule
        description={"Review candidate applications"}
        time={"11:30 AM"}
      />
      <p className="text-[12px] font-poppins opacity-50">Other</p>
      <Schedule description={"Interview with candidates"} time={"10:30 AM"} />
      <Schedule
        description={"Short meeting with product designer"}
        time={"09:15 AM"}
      />
      <Text data={"Create a New Schedule"} />
    </div>
  );
};

export default ScheduleCard;
