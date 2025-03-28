import Chats from "./Chats";
import Search from "./Search";

const Sidebar = () => {
  return (
    <div className="w-1/3 bg-amber-300 h-[83vh] flex flex-col">
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
