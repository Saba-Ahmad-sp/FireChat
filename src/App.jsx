import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {auth, db} from "./firebase"
import { doc, getDoc} from "firebase/firestore"
import { useEffect, useState } from "react";


function App() {
  const [userDetails, setUserDetails] = useState(null);
  
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async(user) => {
      if (!user) {
        console.log("User is not logged in");
        setUserDetails(null);
        return <Navigate to="/login"/>;
      }
  
      // console.log("User:", user);
  
      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          // console.log("User data:", docSnap.data().displayName);
          const currUser = docSnap.data().displayName;
          
        } else {
          console.log("User document not found in Firestore.");
          setUserDetails(null);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    });
  };

 

  useEffect(()=>{
    fetchUserData()
  },[])
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={userDetails ? <Home userDetails={userDetails} /> : <Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
