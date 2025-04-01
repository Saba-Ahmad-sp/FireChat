import Add from "../assets/Add.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore"; 
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


const Register = () => {
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value.trim();
    const email = e.target[1].value.trim();
    const password = e.target[2].value.trim();

    if (!displayName || !email || !password) return;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;

      await updateProfile(user, {
        displayName: displayName,
      });

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
      });
      await setDoc(doc(db, "userChats", user.uid), {});

      console.log("User signed up successfully:", user);
      window.location.href = "/"; 
      toast.success("Registered Successfully", {
        position:"top-center"
      })
    } catch (error) {
      setErr(true);
      console.error("Error signing up:", error.code, error.message);
    }
  };
  

  return (
    <>
      <div className="h-dvh bg-[#9ACBD0] flex flex-col items-center justify-center">
        <div className=" bg-[#F2EFE7] w-80 flex flex-col py-4 px-14 rounded-xl text-center gap-2">
          <span className="font-semibold text-2xl tracking-wider font-mono text-[#006A71]">
            FireChat
          </span>
          <span
            className="font-medium tracking-wide text-[#48A6A7] mb-2 +
          "
          >
            Register
          </span>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
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
           
            <button
              className="bg-blue-400 rounded-2xl hover:bg-blue-500 py-1 text-white font-semibold tracking-wider mt-4"
              type="submit"
            >
              Sign Up
            </button>
            
          </form>
          <p className="mt-2 text-xs text-[#006A71]">
            Already Registered? <Link to="/login">Login</Link>
          </p>
        </div>
        {err && <span>Something went wrong</span>}
      </div>
    </>
  );
};

export default Register;
