import React from "react";

const Card = ({ title, total, men, women, changePercentage }) => {
  return (
    <div className="bg-white border border-gray-400 rounded-lg p-4 shadow-md w-[360px] h-[190px] flex gap-2">
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-poppins text-[18px] font-semibold">
          {title}
        </h3>
        <p className="text-4xl font-bold my-2">{total}</p>
        <div className="flex flex-col gap-1 items-center text-sm text-gray-500">
          <div className="mr-20">
            <span className="font-medium">{men}</span> Men
          </div>
          <div className="mr-20">
            <span className="font-medium">{women}</span> Women
          </div>
        </div>
      </div>
      <div className="mt-20 flex items-center bg-[#ffefe7] h-[24px] rounded-lg p-2">
        <span
          className={`text-sm font-semibold ${
            changePercentage >= 0 ? "text-red-500" : "text-green-500"
          }`}
        >
          {changePercentage > 0
            ? `+${changePercentage}%`
            : `${changePercentage}%`}
        </span>
        <span className="text-xs text-gray-500 ml-2">Past month</span>
      </div>
    </div>
  );
};

export default Card;
