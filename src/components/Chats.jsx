import { useContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "./context/AuthContext"; 
import { ChatContext } from "./context/ChatContext";

const Chats = () => {
  const { userDetails } = useAuth(); 
  const [chats, setChats] = useState([]);
  const {dispatch} = useContext(ChatContext)

  useEffect(() => {
    if (!userDetails?.uid) return;
    
    const unsub = onSnapshot(doc(db, "userChats", userDetails.uid), (doc) => {
      setChats(doc.data());
    });

    return () => unsub();
  }, [userDetails?.uid]);

  const handleSelect = (u) => {
    dispatch({type:"CHANGE_USER", payload:u})
  }

  return (
    <>
    {console.log(chats)}
      {Object.entries(chats)?.sort((a,b) => b[1].date - a[1].date).map((chat) => (
        <div className="pl-1.5 flex h-14 items-center mt-2" key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
          <div className="bg-blue-400 mt-1 mb-1 w-9 h-9 rounded-full flex justify-center items-center ml-0.5"></div>
          <div className="w-3/4 pl-2">
            <div className="text-sm">{chat[1].userInfo.displayName}</div>
            <div className="text-[11px] mt-[-1px]">{chat[1].lastMessage?.text}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Chats;
