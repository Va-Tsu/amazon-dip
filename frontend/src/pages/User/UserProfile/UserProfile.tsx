import { Link } from "react-router-dom";
import { Footer } from "../../../assets/Footer";
import { Header } from "../../../assets/Header";
import { useEffect, useState } from "react";
import type { User } from "../../../types/user";
import { mockUser } from "../../../types/testData";
import { getMe } from "../../../api/user";



export function UserProfile() { 

  const [user, setUser] = useState<User | null>(mockUser);

  useEffect (() => {
    const token = localStorage.getItem('token') ?? '';
    getMe(token).then(data => {
      console.log(data);
      setUser(data);
    });
  }, [])
  return (
    <section className="userProfile">
      <Header />
      <div className="userProfile__content">
        <p className="userProfile__breadcrumb"><Link className="userProfile__breadcrumb__link" to={'/'}>Home</Link> / <Link className="userProfile__breadcrumb__link" to={'/user'}>User</Link></p>

        <section className="userProfile__hero">
          <div className="userProfile__hero__block">
            <img className="userProfile__hero__img" src={user?.imageUrl} alt="" />
            <div className="userProfile__hero__text">
              <h1 className="userProfile__hero__name">{user?.fullName}</h1>
              <h2 className="userProfile__hero__email">{user?.email}</h2>
              <button className="userProfile__hero__edit">Edit Profile</button>
            </div>
          </div>
          <Link to={'/basket'} className="userProfile__hero__basket">Basket</Link>
        </section>

        <div className="userProfile__orders">
          <aside className="userProfile__orders__sidebar">
            <h1 className="userProfile__orders__sidebar__title">Order management</h1>
            <nav className="userProfile__orders__sidebar__nav">
              <a className="userProfile__orders__sidebar__link">My orders</a>
              <a className="userProfile__orders__sidebar__link">Track order</a>
              <a className="userProfile__orders__sidebar__link">Viewed products</a>
              <a className="userProfile__orders__sidebar__link">Reviews</a>
              <a className="userProfile__orders__sidebar__link">Payments</a>
              <a className="userProfile__orders__sidebar__link">Favourites</a>
              <a className="userProfile__orders__sidebar__link">Delivery addresses</a>
              <a className="userProfile__orders__sidebar__link">Support</a>
            </nav>
          </aside>

          <div className="userProfile__orders__main">
            <div className="userProfile__orders__main__header">
              <h1 className="userProfile__orders__main__title">My orders</h1>
              <div className="userProfile__orders__main__filters">
                <button className="userProfile__orders__main__filter">All (1)</button>
                <button className="userProfile__orders__main__filter">Cancelled (0)</button>
                <button className="userProfile__orders__main__filter">Delivered (1)</button>
                <button className="userProfile__orders__main__filter">Processing (0)</button>
              </div>
            </div>
            <div className="userProfile__orders__main__list">
              <div className="userProfile__orders__main__card"></div>
            </div>
          </div>
        </div>

        <div className="userProfile__seller__register">
          <h1 className="userProfile__seller__register__title">My market</h1>
            {user?.seller !== null ? (
              <div className="userProfile__seller__register__block">
                <Link className="userProfile__seller__register__button__create" to={"/user/regsellacc"}>Create an acoount</Link>
                <Link className="userProfile__seller__register__button__log" to={"/user/selleracc"}>Log in</Link>
              </div>
            ) : null}
        </div>
      </div>  
      <Footer/>
    </section>
  );
}