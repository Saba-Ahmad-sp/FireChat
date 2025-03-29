import Input from "./Input";

const Chat = () => {
  return (
    <div className="w-2/3 flex flex-col bg-[#9ACBD0] text-gray-900 justify-between rounded-br-2xl shadow-xl">
      <h1 className="pl-3 ">Chat</h1>
      <Input />
    </div>
  );
};

export default Chat;
