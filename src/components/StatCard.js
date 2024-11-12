import React from "react";

const StatCard = ({ title, value, description, color }) => {
  return (
    <div
      className={`p-4 w-[250px] h-[136px] flex flex-col gap-2 rounded-lg shadow-md ${color}`}
    >
      <h3 className="text-md font-poppins font-[500] text-[18px]">{title}</h3>
      <p className="text-3xl font-poppins font-[500] text-[36px]">{value}</p>
      <p className={`text-sm text-${color} font-roboto font-[400] text-[16px]`}>
        {description}
      </p>
    </div>
  );
};

export default StatCard;
