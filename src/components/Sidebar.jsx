import React from "react";
import Chats from "./Chats";
import Search from "./Search";
import { useAuth } from "./context/AuthContext";

const Sidebar = () => {
  const { userDetails } = useAuth();

  return (
    <div className="w-1/3 bg-[#006A71] h-[620px] flex flex-col rounded-bl-xl px-1 shadow-xl">
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
