//#region Imports
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Auth/Login/Login"
import { Register } from "./pages/Auth/Register/Register"
import { Welcome } from "./pages/Auth/Welcome/Welcome";
import { Reset } from "./pages/Auth/Reset/Reset";
import { YommingoMain } from "./pages/Yommingo/YommingoMain/YommingoMain";
//#endregion
function App() {

  return (
    <Routes>
      {/*<Route path="/" element={<Welcome />}/>*/}
      <Route path="/" element={<YommingoMain />}/>
      <Route path="/yommingo">
        <Route index element={<h1>Yommingo</h1>}/>
        <Route path="auth">
          <Route index element={<Welcome />}/>
          <Route path="register" element={<Register />}/>
          <Route path="login" element={<Login />}/>
          <Route path="reset" element={<Reset />}/>
        </Route>
      </Route>
      <Route path="*" element={<h1>404 Not Found</h1>}/>
    </Routes>
  )
}

export default App