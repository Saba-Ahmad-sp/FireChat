import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { db } from "../firebase";
import { v4 as uuid } from "uuid";
import { useAuth } from "./context/AuthContext";
import { ChatContext } from "./context/ChatContext";


const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const { userDetails } = useAuth();
  const { data } = useContext(ChatContext);

  const handleSend = async () =>{

    if(img){
      return;
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: userDetails.uid,
          date: Timestamp.now(),
        }),
      });
    }
    await updateDoc(doc(db, "userChats", userDetails.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp()
    });
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp()
    });

    setText("");
    setImg(null)
  }
  return (
    <div className="bg-[#FBF8EF] w-full h-8  flex justify-between items-center rounded-br-2xl shadow-xl">
      <input
        type="text"
        className="h-10 p-2 text-xs focus:outline-none tracking-wide w-2/3 flex-wrap"
        placeholder="Type Something..."
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex gap-2">
        <label htmlFor="send-file" className="pt-1.5">
          <img
            src="https://www.svgrepo.com/show/509187/paper-clip.svg"
            alt="clip-logo"
            className="w-4.5"
          />
        </label>
        <input
          id="send-file"
          type="file"
          className="hidden"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <img
          src="https://www.svgrepo.com/show/528989/gallery-send.svg"
          alt="gallery-logo"
          className="w-4.5"
        />
        <button className="bg-blue-500  py-1.5 px-2.5 rounded-tl-2xl rounded-br-2xl rounded text-xs mr-0.5 " onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
