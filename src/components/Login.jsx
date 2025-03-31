import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value.trim();
    const password = e.target[1].value.trim();
    
    try{
      await signInWithEmailAndPassword(auth, email, password)
      console.log("user loggedin successfully");
      window.location.href = "/"; 
    } catch(error){
      console.log(error.message);
    }
  }
  return(
    <>
       <div className="h-dvh bg-[#9ACBD0] flex flex-col items-center justify-center">
              <div className=" bg-[#F2EFE7] w-80 flex flex-col py-4 px-14 rounded-xl text-center gap-2">
                <span className="font-semibold text-2xl tracking-wider font-mono text-[#006A71]">
                  FireChat
                </span>
                <span className="font-medium tracking-wide text-[#48A6A7] mb-2">Login</span>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                  <input
                    className="py-1 px-2 border-b-1  text-sm focus:outline-none  focus:border-b-2 focus:border-b-[#9ACBD0]
                   "
                    type="email"
                    placeholder="Enter Email"
                  />
                  <input
                    className="py-1 px-2 border-b-1  text-sm focus:outline-none  focus:border-b-2 focus:border-b-[#9ACBD0]
                   "
                    type="password"
                    placeholder="Password"
                  />
                  <button
                    className="bg-blue-400 rounded-2xl hover:bg-blue-500 py-1 text-white font-semibold tracking-wider"
                    type="submit"
                  >
                    Sign In
                  </button>
                </form>
                <p className="text-xs text-[#006A71]">Not Registered? Register Now</p>
              </div>
            </div>
    </>
  )
}

export default Login;