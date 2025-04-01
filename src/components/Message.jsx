import React, { useContext, useEffect, useRef } from "react";
import { useAuth } from "./context/AuthContext";
import { ChatContext } from "./context/ChatContext";

const Message = ({ message }) => {
  const { userDetails } = useAuth();
  const { data } = useContext(ChatContext);

  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const isSender = message.senderId === userDetails.uid;

  return (
    <div ref={ref} className={`flex flex-col ${isSender ? "items-end" : "items-start"}`}>

      {!isSender && (
        <div className="flex items-center h-auto">
          <span className="ml-2 text-gray-600 text-xs font-bold">{data.user?.displayName || "User"}:</span>
        </div>
      )}

      <div className={`flex flex-col mr-2 items-end ${isSender ? "justify-end" : "justify-start"}  mt-2`}>

        <div className={`p-2 rounded-lg text-sm max-w-xs ${isSender ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}>
          {message.text}
        </div>
        
        <span className="ml-2 text-gray-600 text-xs font-bold">
          {isSender && (
          userDetails.displayName + ":"
        )}
        </span>
        
      </div>
    </div>
  );
};

export default Message;
