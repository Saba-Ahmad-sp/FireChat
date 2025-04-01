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
    <div className="flex h-8">
      <div className="w-1/3 bg-[#27445D] rounded-tl-2xl pl-2 flex items-center">
        <span className="text-[#9ACBD0] font-medium">Fire</span>
        <span className="text-[#9ACBD0] font-bold ml-0.5">Chat</span>
        <span className="text-xs ml-2">{userDetails?.displayName}</span>
        <button className="bg-amber-50 text-black p-1 text-[8px] ml-1 rounded-xl" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="w-2/3 bg-[#48A6A7] text-[#27445D] rounded-tr-2xl flex items-center pl-3 font-semibold">
        <div>{data.user?.displayName}</div>
      </div>
    </div>
  );
};

export default Navbar;
