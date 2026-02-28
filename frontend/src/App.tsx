//#region Imports
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Auth/Login/Login"
import { Register } from "./pages/Auth/Register/Register"
import { Welcome } from "./pages/Auth/Welcome/Welcome";
import { Reset } from "./pages/Auth/Reset/Reset";
import { YommingoMain } from "./pages/Yommingo/YommingoMain/YommingoMain";
import { YommingoProductCard } from "./pages/Yommingo/YommingoProductCard/YommingoProductCard";
import { YommingoCatalog } from "./pages/Yommingo/YommingoCatalog/YommingoCatalog";
import { YommingoAboutPage } from "./pages/YommingoAboutPage";
import { UserProfile } from "./pages/User/UserProfile";
//#endregion
function App() {

  return (
    <Routes>
      {/*<Route path="/" element={<Welcome />}/>*/}
      <Route path="/">
        <Route index element={<YommingoMain />}/>
        <Route path="product/:id" element={<YommingoProductCard />}/>
        <Route path="categories/:category" element={<YommingoCatalog/>}/>
        <Route path="about" element={<YommingoAboutPage/>}/>
        <Route path="user">
          <Route index element={<UserProfile/>}/>
        </Route>
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