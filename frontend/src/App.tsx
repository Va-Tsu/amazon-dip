//#region Imports
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Auth/Login/Login"
import { Register } from "./pages/Auth/Register/Register"
import { Welcome } from "./pages/Auth/Welcome/Welcome";
import { Reset } from "./pages/Auth/Reset/Reset";
//#endregion
function App() {

  return (
    <Routes>
      <Route path="*" element={<h1>404 Not Found</h1>}/>
      <Route path="/" element={<Welcome />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/reset" element={<Reset />}/>
    </Routes>
  )
}

export default App
