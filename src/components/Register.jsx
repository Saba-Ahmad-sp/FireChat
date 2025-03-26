import Add from "../assets/Add.png"
const Register = () => {
  return (
    <>
      <div className="h-dvh bg-[#9ACBD0] flex flex-col items-center justify-center">
        <div className=" bg-[#F2EFE7] w-80 flex flex-col py-4 px-14 rounded-xl text-center gap-2">
          <span className="font-semibold text-2xl tracking-wider font-mono text-[#006A71]">
            FireChat
          </span>
          <span className="font-medium tracking-wide text-[#48A6A7] mb-2">Register</span>
          <form className="flex flex-col gap-3.5">
            <input
              className="py-1 px-2 border-b-1  text-sm focus:outline-none  focus:border-b-2 focus:border-b-[#9ACBD0]
             "
              type="text"
              placeholder="Display Name"
            />
            <input
              className="py-1 px-2 border-b-1  text-sm focus:outline-none  focus:border-b-2 focus:border-b-[#9ACBD0]
             "
              type="email"
              placeholder="Email"
            />
            <input
              className="py-1 px-2 border-b-1  text-sm focus:outline-none  focus:border-b-2 focus:border-b-[#9ACBD0]
             "
              type="password"
              placeholder="Password"
            />
            <input className="hidden" type="file" id="file" />
            <label className="flex items-center gap-4 px-0.5 mb-1 text-xs text-[#48A6A7]" htmlFor="file">
              <img src={Add} className="w-7" alt="add-image-logo" />Add Profile Picture</label>
            <button
              className="bg-blue-400 rounded-2xl hover:bg-blue-500 py-1 text-white font-semibold tracking-wider"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <p className="text-xs text-[#006A71]">Already Registered? Login</p>
        </div>
      </div>
    </>
  );
};

export default Register;
