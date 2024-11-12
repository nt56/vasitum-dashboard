import React from "react";
import logo from "../assets/logo-v.jpg";
import { MdDashboard } from "react-icons/md";
import { TiUserAdd } from "react-icons/ti";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { IoMdPeople } from "react-icons/io";
import { FcDepartment } from "react-icons/fc";
import { BiSupport } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <aside className="w-[242px] bg-gray-100 h-[950px] pt-[20px] pb-[272px] gap-[39px]">
      <img
        src={logo}
        alt="logo"
        className="mx-auto w-[169px] h-[62px] p-[10px] gap-[10px] text-2xl font-bold text-blue-800 mb-8"
      />

      <nav>
        <div className="h-[38px] pt-[10px] pb-[10px] pl-[30px] gap-[10px]  ">
          <p className="opacity-[50%] h-[18px] text-[12px] font-[500]">
            MAIN MENU
          </p>
        </div>
        <ul className="w-[242px] h-[318px] text-xl font-[500] font-poppins">
          <li className="mb-4 text-[#ff5151] pt-[16px]  pl-[30px] gap-[24px] flex  items-center">
            <MdDashboard className="w-[24px] h-[24px]" />
            Dashboard
          </li>
          <li className="pt-[16px] pb-[16px] pl-[30px] gap-[24px] flex  items-center">
            <TiUserAdd className="w-[24px] h-[24px]" />
            Recruitment
          </li>
          <li className="pt-[16px] pb-[16px] pl-[30px] gap-[24px] flex  items-center">
            <RiCalendarScheduleFill className="w-[24px] h-[24px]" />
            Schedule
          </li>
          <li className="pt-[16px] pb-[16px] pl-[30px] gap-[24px] flex  items-center">
            <IoMdPeople className="w-[24px] h-[24px]" />
            Employee
          </li>
          <li className="pt-[16px] pb-[16px] pl-[30px] gap-[24px] flex  items-center">
            <FcDepartment className="w-[24px] h-[24px]" />
            Department
          </li>
        </ul>
      </nav>

      <nav>
        <div className="h-[38px] pt-[10px] pb-[10px] pl-[30px] gap-[10px] text-sm text-left">
          <p className="opacity-[50%] h-[18px] text-[12px] font-[500]">OTHER</p>
        </div>
        <ul className="w-[242px] h-[318px] text-xl font-[500] font-poppins">
          <li className="pt-[16px] pb-[16px] pl-[30px] gap-[24px] flex  items-center">
            <BiSupport className="w-[24px] h-[24px]" />
            Support
          </li>
          <li className="pt-[16px] pb-[16px] pl-[30px] gap-[24px] flex  items-center">
            <IoMdSettings className="w-[24px] h-[24px]" />
            Settings
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
