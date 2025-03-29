  
const Navbar = () => {
  return (
    <div className="flex h-8">
      <div className="w-1/3 bg-[#27445D] rounded-tl-2xl pl-3 flex items-center "><span className="text-[#9ACBD0] font-medium">Fire</span><span className="text-[#9ACBD0] font-bold ml-0.5">Chat</span></div>
      <div className="w-2/3 bg-[#48A6A7]   text-[#27445D] rounded-tr-2xl flex items-center pl-3 font-semibold"><div>Name</div>
      </div>
    </div>
  );
};

export default Navbar;
