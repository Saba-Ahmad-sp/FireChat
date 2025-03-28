import Chat from "./Chat";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div className="bg-gray-700 text-white min-h-screen flex flex-col">
      <div className="p-10">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Home;
