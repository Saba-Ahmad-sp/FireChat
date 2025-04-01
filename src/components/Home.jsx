import Chat from "./Chat";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useAuth } from "./context/AuthContext"; // ✅ Import useAuth

const Home = () => {
  const { userDetails } = useAuth(); // ✅ Use useAuth hook

  return (
    <div className="bg-[#F2EFE7] text-white min-h-screen w-screen flex flex-col justify-center items-center">
      <div className="p-10 min-w-3/4">
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
