import React, { useContext } from "react";
import Admin from "./components/Screens/Admin/Admin";
import SiginInAdmin from "./components/Screens/SignIn/SignInAdmin"



import { AuthContext } from "../src/context/authContext/AuthContext";
import { AuthContextProvider } from "../src/context/authContext/AuthContext";

const handleUnAuth = () => {
  localStorage.removeItem("user");
}


function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <AuthContextProvider>
        {user && user.roles.includes("admin") ? <Admin /> : <SiginInAdmin />}
      </AuthContextProvider>
    </>

  );
}

export default App;
