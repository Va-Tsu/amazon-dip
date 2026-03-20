//#region Imports
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Auth/Login/Login"
import { Register } from "./pages/Auth/Register/Register"
import { Welcome } from "./pages/Auth/Welcome/Welcome";
import { Reset } from "./pages/Auth/Reset/Reset";
import { YommingoMain } from "./pages/Yommingo/YommingoMain/YommingoMain";
import { YommingoProductCard } from "./pages/Yommingo/YommingoProductCard/YommingoProductCard";
import { YommingoCatalog } from "./pages/Yommingo/YommingoCatalog/YommingoCatalog";
import { YommingoAboutPage } from "./pages/Yommingo/YommingoAboutPage";
import { UserProfile } from "./pages/User/UserProfile";
import { YommingoBasket } from "./pages/Yommingo/YommingoBasket/YommingoBasket";
import { YommingoSearch } from "./pages/Yommingo/YommingoSearch/YommingoSearch";
import { SellerAccount } from "./pages/User/SellerAccount";
import { SellerAddProduct } from "./pages/User/SellerAddProduct/SellerAddProduct";
import { RegisterSellerAccount } from "./pages/Auth/RegisterSellerAccount";
import { LoginSellerAccount } from "./pages/Auth/LoginSellerAccount";
import { ResetSellerAccount } from "./pages/Auth/ResetSellerAccount";
//#endregion


function App() {

  return (
    <Routes>
      {/*<Route path="/" element={<Welcome />}/>*/}
      <Route path="/">
        <Route index element={<YommingoMain />}/>
        <Route path="product/:id" element={<YommingoProductCard />}/>
        <Route path="categories/:category" element={<YommingoCatalog/>}/>
        <Route path="country/:category" element={<YommingoCatalog/>}/>
        <Route path="about" element={<YommingoAboutPage/>}/>
        <Route path="basket" element={<YommingoBasket/>}/>
        <Route path="search" element={<YommingoSearch />} />
        <Route path="user">
          <Route index element={<UserProfile/>}/>
          <Route path="regsellacc" element={<RegisterSellerAccount/>}/>
          <Route path="logsellacc" element={<LoginSellerAccount/>}/>
          <Route path="resetsellacc" element={<ResetSellerAccount/>}/>
          <Route path="selleracc">
            <Route index element={<SellerAccount/>}/>
            <Route path="addproduct" element={<SellerAddProduct/>}/>
          </Route>
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