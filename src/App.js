import Navbar from "./components/Navbar";
import React from "react";
import { auth } from "./firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import Chat from "./components/Chat";

function App() {

  const [user] = useAuthState(auth)
  console.log(user)
  return (
    <div className="max-w-[720px] mt-2 mx-auto text-center  overflow-y-hidden">
      <div className="flex flex-col h-[90vh] bg-gray-200 mt-10 shadow-xl border relative">
        <Navbar />
        {
          user ? <Chat /> : <p className="text-sm text-blue-800 font-bold font-san my-auto opacity-10">Sign In to Chat </p>
        }
      </div>
    </div>
  );
}

export default App;
