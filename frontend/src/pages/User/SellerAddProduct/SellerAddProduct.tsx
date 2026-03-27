import { Link } from "react-router-dom";
import { Footer } from "../../../assets/Footer";
import { Header } from "../../../assets/Header";

export function SellerAddProduct () {

  return (
    <section className="sap">
      <Header />
      <section className="sap__content">
        <p className="sap__breadcrumb">
          <Link className="sap__breadcrumb__link" to={'./'}>Home</Link> / <Link className="sap__breadcrumb__link" to={'./user'}>Profile</Link> / <Link className="sap__breadcrumb__link" to={'./addproduct'}>Add New Product</Link>
        </p>

        <h1 className="sap__title">Add new product</h1>

        <section className="sap__photo">
          <h1 className="sap__photo__title">Add a photo</h1>
          <div className="sap__photo__block">
            <input type="file" className="sap__photo__input" />
            <input type="file" className="sap__photo__input" />
            <input type="file" className="sap__photo__input" />
            <input type="file" className="sap__photo__input" />
          </div>
        </section>

        <section className="sap__inf">
          <div className="sap__inf__about">
            <h2 className="sap__inf__about__title">Information about</h2>
            <div className="sap__inf__about__block">
              <div className="sap__inf__about__field">
                <h3 className="sap__inf__about__field__label">Enter product name</h3>
                <input type="text" placeholder="" className="sap__inf__about__field__input" />
              </div>
              <div className="sap__inf__about__field">
                <h3 className="sap__inf__about__field__label">Enter brand</h3>
                <input type="text" placeholder="" className="sap__inf__about__field__input" />
              </div>
              <div className="sap__inf__about__field">
                <h3 className="sap__inf__about__field__label">Select category</h3>
                <input type="text" placeholder="" className="sap__inf__about__field__input" />
              </div>
            </div>
          </div>

          <div className="sap__inf__desc">
            <h3 className="sap__inf__desc__title">Description</h3>
            <textarea placeholder="Enter product description" className="sap__inf__desc__textarea"/>
          </div>

          <div className="sap__inf__product">
            <h3 className="sap__inf__product__title">Product information</h3>
            <div className="sap__inf__product__grid">
              <div className="sap__inf__product__field">
                <h4 className="sap__inf__product__field__label">Weight</h4>
                <input type="text" placeholder="e.g., 500g" className="sap__inf__product__field__input" />
              </div>
              <div className="sap__inf__product__field">
                <h4 className="sap__inf__product__field__label">Ingredients</h4>
                <input type="text" placeholder="List ingredients" className="sap__inf__product__field__input" />
              </div>
              <div className="sap__inf__product__field">
                <h4 className="sap__inf__product__field__label">SKU</h4>
                <input type="text" placeholder="Enter SKU" className="sap__inf__product__field__input" />
              </div>
              <div className="sap__inf__product__field">
                <h4 className="sap__inf__product__field__label">Country of origin</h4>
                <input type="text" placeholder="Select country" className="sap__inf__product__field__input" />
              </div>
              <div className="sap__inf__product__field">
                <h4 className="sap__inf__product__field__label">Store conditions</h4>
                <input type="text" placeholder="e.g., Keep refrigerated" className="sap__inf__product__field__input" />
              </div>
              <div className="sap__inf__product__field">
                <h4 className="sap__inf__product__field__label">Expiration date</h4>
                <input type="text" placeholder="d.m.y" className="sap__inf__product__field__input" />
              </div>
            </div>

            <div className="sap__toggle__wrap">
              <label className="sap__toggle">
                <input type="checkbox" className="sap__toggle__input" />
                <span className="sap__toggle__slider"></span>
              </label>
              <p className="sap__toggle__label">Availability in stock</p>
            </div>
          </div>
        </section>

        <section className="sap__pricing">
          <h2 className="sap__pricing__title">Pricing</h2>
          <div className="sap__pricing__price">
            <div className="sap__pricing__price__field">
              <h3 className="sap__pricing__price__field__label">Price</h3>
              <input type="text" placeholder="e.g., 500g" className="sap__pricing__price__field__input" />
            </div>
            <div className="sap__toggle__wrap">
              <label className="sap__toggle">
                <input type="checkbox" className="sap__toggle__input" />
                <span className="sap__toggle__slider"></span>
              </label>
              <p className="sap__toggle__label">Sale</p>
            </div>
            <div className="sap__toggle__wrap">
              <label className="sap__toggle">
                <input type="checkbox" className="sap__toggle__input" />
                <span className="sap__toggle__slider"></span>
              </label>
              <p className="sap__toggle__label">Show price per unit</p>
            </div>
          </div>

          <h2 className="sap__pricing__subtitle">Pricing calculation</h2>
          <div className="sap__pricing__calc">
            <div className="sap__pricing__calc__field">
              <h4 className="sap__pricing__calc__field__label">Cost of goods</h4>
              <input className="sap__pricing__calc__field__input" type="text" placeholder="$ 0" />
            </div>
            <div className="sap__pricing__calc__field">
              <h4 className="sap__pricing__calc__field__label">Profit</h4>
              <input className="sap__pricing__calc__field__input" type="text" placeholder="$ 0.00" />
            </div>
            <div className="sap__pricing__calc__field">
              <h4 className="sap__pricing__calc__field__label">Margin%</h4>
              <input className="sap__pricing__calc__field__input" type="text" placeholder="0.0%" />
            </div>
          </div>
          <p className="sap__pricing__note">Margin is calculated automatically.</p>
        </section>

        <section className="sap__params">
          <h2 className="sap__params__title">Product parameters</h2>
          <button className="sap__params__add">+ Add parameters</button>
        </section>

        <section className="sap__goods">
          <h2 className="sap__goods__title">Goods inventory and delivery</h2>
          <div className="sap__toggle__wrap">
            <label className="sap__toggle">
              <input type="checkbox" className="sap__toggle__input" />
              <span className="sap__toggle__slider"></span>
            </label>
            <p className="sap__toggle__label">Keep track of inventory</p>
          </div>
          <div className="sap__goods__status">
            <div className="sap__goods__status__field">
              <h3 className="sap__goods__status__field__label">Status</h3>
              <input placeholder="Available" type="text" className="sap__goods__status__field__input" />
            </div>
            <div className="sap__goods__status__field">
              <h3 className="sap__goods__status__field__label">Article</h3>
              <input placeholder="Article number" type="text" className="sap__goods__status__field__input" />
            </div>
            <div className="sap__goods__status__field">
              <h3 className="sap__goods__status__field__label">Parcel weight</h3>
              <input placeholder="e.g., 1,5 kg" type="text" className="sap__goods__status__field__input" />
            </div>
          </div>
        </section>

        <section className="sap__publish">
          <button className="sap__publish__btn">Publish product</button>
        </section>
      </section>
      <Footer />
    </section>
  );
};