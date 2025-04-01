import { useNavigate } from "react-router";
import { auth } from "../firebase";
import { useAuth } from "./context/AuthContext";
import { useContext } from "react";
import { ChatContext } from "./context/ChatContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { userDetails } = useAuth(); 
  const { data } = useContext(ChatContext);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login");
      console.log("User Logged Out");
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  return (
    <div className="flex h-12">
      <div className="w-1/3 bg-[#27445D] rounded-tl-2xl pl-2 flex items-center justify-between">
        <div className="mr-2">
        <span className="text-[#9ACBD0] font-medium">Fire</span>
        <span className="text-[#9ACBD0] font-bold ">Chat</span>
        </div>
        <div className="flex flex-col mr-2">
        <span className="text-xs">{userDetails?.displayName}</span>
        <button className="bg-amber-50 text-black p-1 text-[8px]  rounded-xl mt-1" onClick={handleLogout}>
          Logout
        </button>
        </div>
      </div>
      <div className="w-2/3 bg-[#48A6A7] text-[#27445D] rounded-tr-2xl flex items-center justify-center font-semibold">
        <div className="bg-[#27445D] rounded-xl px-2 py-0.5 text-sm text-white" >{data.user?.displayName}</div>
      </div>
    </div>
  );
};

export default Navbar;
