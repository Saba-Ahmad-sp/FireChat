import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAYWyFh66ZnCCMYMuLSm8cP1q7gqCmaaXk",
  authDomain: "firechat-f7823.firebaseapp.com",
  projectId: "firechat-f7823",
  storageBucket: "firechat-f7823.firebasestorage.app",
  messagingSenderId: "912956390190",
  appId: "1:912956390190:web:4ed0d876aa38cfd2f0d8bf",
  measurementId: "G-8CCL17FY8J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
