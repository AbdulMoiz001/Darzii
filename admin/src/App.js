import React, { useContext } from "react";
import Admin from "./components/Screens/Admin/Admin";
import SiginInAdmin from "./components/Screens/SignIn/SignInAdmin"



import { AuthContext } from "../src/context/authContext/AuthContext";
import { AuthContextProvider } from "../src/context/authContext/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  // user.roles.includes("user")

  return (
    <>
      <AuthContextProvider>
        {user.roles.includes("admin") ? <Admin /> : <SiginInAdmin />}
      </AuthContextProvider>
    </>

  );
}

export default App;
