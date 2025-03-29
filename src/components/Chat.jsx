
import Input from "./Input";
import Messages from "./Messages";

const Chat = () => {
  return (
    <div className="w-2/3 h-[620px] flex flex-col bg-[#9ACBD0] text-gray-900 justify-between rounded-br-2xl shadow-xl ">
      <h1 className="pl-3 ">Chat</h1>
      <div className="overflow-auto mt-1 ml-2">
        <Messages/>
      </div>
      <Input />
    </div>
  );
};

export default Chat;
