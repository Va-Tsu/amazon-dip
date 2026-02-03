//#region Imports
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Auth/Login/Login"
import { Register } from "./pages/Auth/Register/Register"
import { Welcome } from "./pages/Auth/Welcome/Welcome";
//#endregion
function App() {

  return (
    <Routes>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/welcome" element={<Welcome />}/>
    </Routes>
  )
}

export default App
