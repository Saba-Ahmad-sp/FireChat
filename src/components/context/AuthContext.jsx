import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../../firebase"; // ✅ Ensure the correct import path
import { doc, getDoc } from "firebase/firestore";

// ✅ Create Auth Context
export const AuthContext = createContext(null);

// ✅ AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        console.log("User is not logged in");
        setUserDetails(null);
        return;
      }

      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserDetails({ uid: user.uid, ...docSnap.data() }); // ✅ Include `uid`
        } else {
          console.log("User document not found in Firestore.");
          setUserDetails(null);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ userDetails }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom Hook to Use Auth Context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
