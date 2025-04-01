import { useState } from "react";
import { db } from "../firebase";
import { collection, doc, getDocs, getDoc, query, serverTimestamp, updateDoc, where, setDoc } from "firebase/firestore";
import { useAuth } from "./context/AuthContext";

const Search = () => {
  const { userDetails } = useAuth();
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = async () => {
    if (!username.trim()) {
      setErr(true);
      setUser(null);
      return;
    }

    const q = query(collection(db, "users"), where("displayName", "==", username));

    try {
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        // console.log("No user found in Firestore");
        setErr(true);
        setUser(null);
      } else {
        querySnapshot.forEach((doc) => {
          console.log("User found:", doc.data());
          setUser(doc.data());
        });
        setErr(false);
      }
    } catch (err) {
      console.error("Error fetching user:", err);
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    if (!user || !user.uid) {
      console.error("User data is missing!", user);
      setErr(true);
      return;
    }

    if (!userDetails?.uid) {
      console.error("Current user ID is missing!", userDetails?.uid);
      setErr(true);
      return;
    }

    const combineId =
      userDetails.uid > user.uid ? userDetails.uid + user.uid : user.uid + userDetails.uid;

    // console.log("Combined ID:", combineId);

    try {
      const res = await getDoc(doc(db, "chats", combineId));

      if (!res.exists()) {
        console.log("Creating a new chat document...");

        await setDoc(doc(db, "chats", combineId), { messages: [] });

        await updateDoc(doc(db, "userChats", userDetails.uid), {
          [combineId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
          },
          [combineId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combineId + ".userInfo"]: {
            uid: userDetails.uid,
            displayName: userDetails.displayName,
          },
          [combineId + ".date"]: serverTimestamp(),
        });

        // console.log("User chat updated successfully");
      }
    } catch (err) {
      // console.error("Error updating userChats:", err);
      setErr(true);
    }
    setUser(null);
    setUsername("");
  };

  return (
    <>
      <label htmlFor="search" className="flex bg-[#9ACBD0] h-8 rounded-tr-2xl rounded-bl-2xl mt-2">
        <input
          type="text"
          className=" bg-[#9ACBD0] w-3/4 focus:outline-none text-black p-3 text-sm rounded-2xl"
          placeholder="Search"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          id="search"
          value={username}
        />
      </label>
      {err && !user && <span>User not found</span>}
      {user && (
        <div onClick={handleSelect}>
          <div className="pl-1.5 flex h-14 items-center bg-blue-900 rounded-2xl mt-2 text-black">
            <div className="bg-blue-400 mt-1 mb-1 w-9 h-9 rounded-full flex justify-center items-center ml-0.5"></div>
            <div className="w-3/4 pl-2">
              <div className="text-sm">{user.displayName}</div>
              <div className="text-[11px] mt-[-1px]">message</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
