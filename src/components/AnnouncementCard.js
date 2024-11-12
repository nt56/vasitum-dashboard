import React from "react";
import Announcement from "./Announcement";
import Text from "./Text";

const AnnouncementCard = ({ title }) => {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1; // JavaScript months are 0-indexed
  const date = today.getDate();

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-[770px] border border-gray-400 flex flex-col gap-2">
      <h3 className="text-lg font-semibold mb-4 flex justify-between">
        {title} <span>{`${date}/${month}/${year}`}</span>
      </h3>
      <Announcement
        description={"Outing schedule for every department"}
        time={"5 Minutes ago"}
      />
      <Announcement
        description={"Meeting HR Department"}
        time={"Yesterday, 12:30 PM"}
      />
      <Announcement
        description={
          "IT Department need two more talents for UX/UI Designer position"
        }
        time={"Yesterday, 09:15 AM"}
      />
      <Text data={"See All Announcements"} />
    </div>
  );
};

export default AnnouncementCard;
