import React, { useContext } from "react";
import Admin from "./components/Screens/Admin/Admin";
import SiginInAdmin from "./components/Screens/SignIn/SignInAdmin"



import { AuthContext } from "../src/context/authContext/AuthContext";
function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user ? <Admin /> : <SiginInAdmin />}
    </>

  );
}

export default App;
