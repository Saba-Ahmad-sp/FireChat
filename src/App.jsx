import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./components/context/AuthContext";
import { ChatContextProvider } from "./components/context/ChatContext";

function App() {
  return (
    <AuthProvider>
      <ChatContextProvider>
      <AppContent /> 
      </ChatContextProvider>
    </AuthProvider>
  );
}

function AppContent() {
  const { userDetails } = useAuth()
  console.log(userDetails);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={userDetails ? <Home userDetails={userDetails} /> : <Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
