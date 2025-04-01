import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { ChatContext } from "./context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase"; 

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    if (!data.chatId || data.chatId === "null") return; 

    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      if (doc.exists()) {
        setMessages(doc.data().messages);
      }
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <div className="mt-3">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
