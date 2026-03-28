import { Link } from "react-router-dom";
import { Footer } from "../../../assets/Footer";
import { Header } from "../../../assets/Header";
import { useEffect, useState } from "react";
import type { Seller } from "../../../types/seller";
import { getSellerMe } from "../../../api/seller";
import { mockSeller } from "../../../types/testData";
//import { CardList } from "../../../assets/CardList";

export function SellerAccount() {

  const [seller, setSeller] = useState<Seller | null>(mockSeller);

  useEffect(() => {
    const token = localStorage.getItem('token') ?? '';
    getSellerMe(token).then(setSeller);
  }, []);

  return (
    <section className="sellacc">
      <Header />
      <div className="sellacc__content">
        <p className="sellacc__breadcrumb">
          <Link className="sellacc__breadcrumb__link" to={'/'}>Home</Link> / <Link className="sellacc__breadcrumb__link" to={'/user'}>User</Link> / <Link className="sellacc__breadcrumb__link" to={'/sellacc'}>Seller Acount</Link>
        </p>

        <div className="sellacc__grid">
          <section className="sellacc__main">
            <div className="sellacc__main__left">

              <img className="sellacc__main__img" src={seller?.logoUrl ?? "/imgs/icons/sellerAcc/ava.svg"} alt="" />
              <h2 className="sellacc__main__title">{seller?.name}</h2>
              <p className="sellacc__main__user">{seller?.email}</p>
            </div>

            <div className="sellacc__main__right">

              <Link to={'./'} className="sellacc__main__edit">Edit</Link>
              <p className="sellacc__main__desc">{seller?.description}</p>
            </div>  

          </section>

          <section className="sellacc__finance">
            <h2 className="sellacc__finance__title">Finance</h2>
            <div className="sellacc__finance__grid">

              <div className="sellacc__finance__card">
                <h3 className="sellacc__finance__card__label">Balance</h3>
                <p className="sellacc__finance__card__value">{seller?.balance}</p>
              </div>
              
              <div className="sellacc__finance__card">
                <h3 className="sellacc__finance__card__label">Sells</h3>
                <p className="sellacc__finance__card__value">{seller?.balance}</p>
              </div>

              <div className="sellacc__finance__card">
                <h3 className="sellacc__finance__card__label">Pending</h3>
                <p className="sellacc__finance__card__value">{seller?.pending}</p>
              </div>

            </div>
          </section>

          <section className="sellacc__analytics">
            <h2 className="sellacc__analytics__title">Analytics</h2>

            <div className="sellacc__analytics__grid">
              <button className="sellacc__analytics__button active">Seles by period</button>
              <button className="sellacc__analytics__button">Popular products</button>
              <button className="sellacc__analytics__button">Conversion</button>
              <button className="sellacc__analytics__button">Average check</button>
              <button className="sellacc__analytics__button">Repeat purchases</button>
            </div>
          </section>

          <section className="sellacc__products">
            <h2 className="sellacc__products__title">Products</h2>
            <Link to={"./addproduct"} className="sellacc__products__link">Add new product</Link>
            <Link to={"./"} className="sellacc__products__link">Edit Product card</Link>
            <Link to={"./"} className="sellacc__products__link">Price managment</Link>
            <Link to={"./"} className="sellacc__products__link">Stock levels</Link>
            <Link to={"./"} className="sellacc__products__link">Photos</Link>
            <Link to={"./"} className="sellacc__products__link">Moderation status</Link>
            <Link to={"./"} className="sellacc__products__link">Categories and filters</Link>
          </section>

          <section className="sellacc__stat">

            <div className="sellacc__stat__dashboard">
              <div className="sellacc__stat__dashboard__card active">
                <img className="sellacc__stat__dashboard__card__img" src={"/imgs/icons/sellerAcc" + "/kol.svg"} alt="" />
                <h3 className="sellacc__stat__dashboard__card__title">Dashboard</h3>
              </div>
              <div className="sellacc__stat__dashboard__card">
                <img className="sellacc__stat__dashboard__card__img" src={"/imgs/icons/sellerAcc" + "/kol.svg"} alt="" />
                <h3 className="sellacc__stat__dashboard__card__title">Notifications</h3>
              </div>
              <div className="sellacc__stat__dashboard__card">
                <img className="sellacc__stat__dashboard__card__img" src={"/imgs/icons/sellerAcc" + "/kol.svg"} alt="" />
                <h3 className="sellacc__stat__dashboard__card__title">Chats</h3>
              </div>
              <div className="sellacc__stat__dashboard__card">
                <img className="sellacc__stat__dashboard__card__img" src={"/imgs/icons/sellerAcc" + "/kol.svg"} alt="" />
                <h3 className="sellacc__stat__dashboard__card__title">Reviews and rating</h3>
              </div>
              <div className="sellacc__stat__dashboard__card">
                <img className="sellacc__stat__dashboard__card__img" src={"/imgs/icons/sellerAcc" + "/kol.svg"} alt="" />
                <h3 className="sellacc__stat__dashboard__card__title">Orders</h3>
              </div>
            </div>

            <div className="sellacc__stat__content">
              <div className="sellacc__stat__content__card">
                <img className="sellacc__stat__content__card__img" src="" alt="" />
                <h3 className="sellacc__stat__content__card__title">Number of active products</h3>
                <p className="sellacc__stat__content__card__value">3</p>
              </div>
              <div className="sellacc__stat__content__card">
                <img className="sellacc__stat__content__card__img" src="" alt="" />
                <h3 className="sellacc__stat__content__card__title">New orders</h3>
                <p className="sellacc__stat__content__card__value">3</p>
              </div>
              <div className="sellacc__stat__content__card">
                <img className="sellacc__stat__content__card__img" src="" alt="" />
                <h3 className="sellacc__stat__content__card__title">Order statuses</h3>
                <p className="sellacc__stat__content__card__value">3</p>
              </div>
            </div>
          </section>

          <section className="sellacc__revenue">
            <h2 className="sellacc__revenue__title">Revenue for the: day / week / month</h2>

            <div className="sellacc__revenue__block">
              <p className="sellacc__revenue__value">{seller?.sells}</p>
            </div>
          </section>

          <section className="sellacc__orders">
            <h2 className="sellacc__orders__title">
              Orders
            </h2>

            <Link to={"./"} className="sellacc__orders__link">Order list</Link>
            <Link to={"./"} className="sellacc__orders__link">Order details</Link>
            <Link to={"./"} className="sellacc__orders__link">Invoice printing</Link>
            <Link to={"./"} className="sellacc__orders__link">Confirmation of sending</Link>
            <Link to={"./"} className="sellacc__orders__link">Returns and disputes</Link>
          </section>
        </div>

        <div className="sellacc__myproducts">
          {/*<CardList/>*/}
        </div>
      </div>
      <Footer/>
    </section>
  );
};