import React from "react";
import user from "../assets/user.jpeg";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoChatboxEllipsesSharp } from "react-icons/io5";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-3 pl-[50px] pb-5 h-[60px] border-b border-[#f1f1f1]">
      <input
        type="text"
        placeholder="Search "
        className=" ml-5 p-2 border rounded-lg w-1/2  "
      />

      <div className="flex items-center gap-[12px] font-poppins font-[500]">
        <IoIosNotifications className="w-[24px] h-[24px] text-[#b2b2b2]" />
        <IoChatboxEllipsesSharp className="w-[24px] h-[24px] text-[#b2b2b2]" />
        <img src={user} alt="User Profile" className="w-10 h-10 rounded-full" />
        <span className="ml-2 flex items-center gap-1 font-poppins font-[500] text-[16px]">
          Admirra John <IoIosArrowDown />
        </span>
      </div>
    </header>
  );
};

export default Header;
