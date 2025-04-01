import React, { useContext } from "react";
import { useAuth } from "./context/AuthContext";
import { ChatContext } from "./context/ChatContext";

const Message = ({ Message }) => {
  const { userDetails } = useAuth();
  const { data } = useContext(ChatContext);

  return (
    <div className="flex flex-col">
      <div className="flex items-center h-8">
        <img
          src="https://img.freepik.com/premium-photo/portrait-indian-college-boy-holding-books_255667-22041.jpg"
          alt="chat-logo"
          className="w-8 h-8 rounded-full ml-2 "
        />
        <span className="ml-2">Just now</span>
      </div>

      <div className="flex items-center justify-end">
        <p className="mr-2">Hello</p>
        <img
          src="https://i.pinimg.com/736x/26/1a/54/261a547bce7c810ebaa5a2291edb1571.jpg"
          alt="profile-logo"
          className="w-8 h-8 rounded-full mr-3"
        ></img>
      </div>
    </div>
  );
};

export default Message;
