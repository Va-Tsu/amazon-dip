import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../../../assets/Footer";
import { Header } from "../../../assets/Header";
import type { AddProductRequest } from "../../../types/product";
import { useState } from "react";
import { addProduct } from "../../../api/product";

export function SellerAddProduct () {
  const navigate = useNavigate();

  const [product, setProduct] = useState<AddProductRequest>({
    photo: [],
    name: "",
    brand: "",
    category: "",
    description: "",
    weight: "",
    ingredients: "",
    sku: "",
    country: "",
    conditions: "",
    exparaition: "",
    avaibality: false,
    price: 0,
    sale: false,
    showPricePerUnit: false,
    costOfGood: 0,
    profit: 0,
    margin: 0,
    params: []
  });

  const updateProduct = (fields: Partial<AddProductRequest>) => {
    setProduct(prev => ({... prev, ...fields}))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token') ?? '';
      await addProduct(product, token);
      navigate('/user/selleracc');
    } catch (e) {
      alert((e as Error).message);
    }
    console.log(product)
  };

  const handleCostOfGood = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cost = Number(e.target.value);
    const margin = product.price > 0
      ? +((( product.price - cost) / product.price) * 100).toFixed(2)
      : 0;
    const profit = +(product.price - cost).toFixed(2);
    updateProduct({ costOfGood: cost, profit, margin });
  };

  return (
    <section className="sap">
      <Header />
      <section className="sap__content">
        <p className="sap__breadcrumb">
          <Link className="sap__breadcrumb__link" to={'./'}>Home</Link> / <Link className="sap__breadcrumb__link" to={'./user'}>Profile</Link> / <Link className="sap__breadcrumb__link" to={'./addproduct'}>Add New Product</Link>
        </p>

        <h1 className="sap__title">Add new product</h1>
        <form action="" onSubmit={handleSubmit}>
          <section className="sap__photo">
            <h1 className="sap__photo__title">Add a photo</h1>
              <div className="sap__photo__block">
                {[0, 1, 2, 3].map(i => (
                  <input
                    key={i}
                    type="file"
                    accept="image/png, image/jpeg"
                    className="sap__photo__input"
                    onChange={e => {
                      const file = e.target.files?.[0];
                      const updated = [...product.photo];
                      if (file) {
                        updated[i] = file;
                      } else {
                        updated.splice(i, 1);
                      }
                      updateProduct({ photo: updated });
                    }}
                  />
                ))}
              </div>
          </section>

          <section className="sap__inf">
            <div className="sap__inf__about">
              <h2 className="sap__inf__about__title">Information about</h2>
              <div className="sap__inf__about__block">
                <div className="sap__inf__about__field">
                  <h3 className="sap__inf__about__field__label">Enter product name</h3>
                  <input
                    type="text"
                    className="sap__inf__about__field__input"
                    value={product.name}
                    onChange={e => updateProduct({ name: e.target.value })}
                  />
                </div>
                <div className="sap__inf__about__field">
                  <h3 className="sap__inf__about__field__label">Enter brand</h3>
                  <input
                    type="text"
                    className="sap__inf__about__field__input"
                    value={product.brand}
                    onChange={e => updateProduct({ brand: e.target.value })}
                  />
                </div>
                <div className="sap__inf__about__field">
                  <h3 className="sap__inf__about__field__label">Select category</h3>
                  <input
                    type="text"
                    className="sap__inf__about__field__input"
                    value={product.category}
                    onChange={e => updateProduct({ category: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className="sap__inf__desc">
              <h3 className="sap__inf__desc__title">Description</h3>
              <textarea
                placeholder="Enter product description"
                className="sap__inf__desc__textarea"
                value={product.description}
                onChange={e => updateProduct({ description: e.target.value })}
              />
            </div>

            <div className="sap__inf__product">
              <h3 className="sap__inf__product__title">Product information</h3>
              <div className="sap__inf__product__grid">
                <div className="sap__inf__product__field">
                  <h4 className="sap__inf__product__field__label">Weight</h4>
                  <input
                    type="text"
                    placeholder="List ingredients"
                    className="sap__inf__product__field__input"
                    value={product.weight}
                    onChange={e => updateProduct({ weight: e.target.value })}
                  />
                </div>
                <div className="sap__inf__product__field">
                  <h4 className="sap__inf__product__field__label">Ingredients</h4>
                  <input
                    type="text"
                    placeholder="List ingredients"
                    className="sap__inf__product__field__input"
                    value={product.ingredients}
                    onChange={e => updateProduct({ ingredients: e.target.value })}
                  />
                </div>
                <div className="sap__inf__product__field">
                  <h4 className="sap__inf__product__field__label">SKU</h4>
                  <input
                    type="text"
                    placeholder="Enter SKU"
                    className="sap__inf__product__field__input"
                    value={product.sku}
                    onChange={e => updateProduct({ sku: e.target.value })}
                  />
                </div>
                <div className="sap__inf__product__field">
                  <h4 className="sap__inf__product__field__label">Country of origin</h4>
                  <input
                    type="text"
                    placeholder="Select country"
                    className="sap__inf__product__field__input"
                    value={product.country}
                    onChange={e => updateProduct({ country: e.target.value })}
                  />
                </div>
                <div className="sap__inf__product__field">
                  <h4 className="sap__inf__product__field__label">Store conditions</h4>
                  <input
                    type="text"
                    placeholder="e.g., Keep refrigerated"
                    className="sap__inf__product__field__input"
                    value={product.conditions}
                    onChange={e => updateProduct({ conditions: e.target.value })}
                  />
                </div>
                <div className="sap__inf__product__field">
                  <h4 className="sap__inf__product__field__label">Expiration date</h4>
                  <input
                    type="text"
                    placeholder="d.m.y"
                    className="sap__inf__product__field__input"
                    value={product.exparaition}
                    onChange={e => updateProduct({ exparaition: e.target.value })}
                  />
                </div>
              </div>

              <div className="sap__toggle__wrap">
                <label className="sap__toggle">
                  <input
                    type="checkbox"
                    className="sap__toggle__input"
                    checked={product.avaibality}
                    onChange={e => updateProduct({ avaibality: e.target.checked })}
                  />
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
                <input
                  type="number"
                  placeholder="0"
                  className="sap__pricing__price__field__input"
                  value={product.price || ""}
                  onChange={e => updateProduct({ price: Number(e.target.value) })}
                />
              </div>
              <div className="sap__toggle__wrap">
                <label className="sap__toggle">
                  <input
                    type="checkbox"
                    className="sap__toggle__input"
                    checked={product.sale}
                    onChange={e => updateProduct({ sale: e.target.checked })}
                  />
                  <span className="sap__toggle__slider"></span>
                </label>
                <p className="sap__toggle__label">Sale</p>
              </div>
              <div className="sap__toggle__wrap">
                <label className="sap__toggle">
                  <input
                    type="checkbox"
                    className="sap__toggle__input"
                    checked={product.showPricePerUnit}
                    onChange={e => updateProduct({ showPricePerUnit: e.target.checked })}
                  />
                  <span className="sap__toggle__slider"></span>
                </label>
                <p className="sap__toggle__label">Show price per unit</p>
              </div>
            </div>

            <h2 className="sap__pricing__subtitle">Pricing calculation</h2>
            <div className="sap__pricing__calc">
              <div className="sap__pricing__calc__field">
                <h4 className="sap__pricing__calc__field__label">Cost of goods</h4>
                  <input
                    type="number"
                    placeholder="$ 0"
                    className="sap__pricing__calc__field__input"
                    value={product.costOfGood || ""}
                    onChange={handleCostOfGood}
                  />
              </div>
              <div className="sap__pricing__calc__field">
                <h4 className="sap__pricing__calc__field__label">Profit</h4>
                <input
                  type="number"
                  placeholder="$ 0.00"
                  className="sap__pricing__calc__field__input"
                  value={product.profit || ""}
                  readOnly
                />
              </div>
              <div className="sap__pricing__calc__field">
                <h4 className="sap__pricing__calc__field__label">Margin%</h4>
                <input
                  type="number"
                  placeholder="0.0%"
                  className="sap__pricing__calc__field__input"
                  value={product.margin || ""}
                  readOnly
                />
              </div>
            </div>
            <p className="sap__pricing__note">Margin is calculated automatically.</p>
          </section>

          <section className="sap__params">
            <h2 className="sap__params__title">Product parameters</h2>
            <button
              type="button"
              className="sap__params__add"
              onClick={() => updateProduct({ params: [...product.params, { label: "", value: "" }] })}
            >
              + Add parameters
            </button>

            {product.params.map((param, index) => (
              <div key={index} className="sap__params__row">
                <div className="sap__params__field">
                  <h2 className="sap__params__field__label">Parameter name</h2>
                  <input
                    type="text"
                    placeholder="e.g., Allergens"
                    className="sap__params__field__input"
                    value={param.label}
                    onChange={e => {
                      const updated = [...product.params];
                      updated[index] = { ...updated[index], label: e.target.value };
                      updateProduct({ params: updated });
                    }}
                  />
                </div>
                <div className="sap__params__field">
                  <h2 className="sap__params__field__label">Value</h2>
                  <input
                    type="text"
                    placeholder="e.g., Contains nuts"
                    className="sap__params__field__input"
                    value={param.value}
                    onChange={e => {
                      const updated = [...product.params];
                      updated[index] = { ...updated[index], value: e.target.value };
                      updateProduct({ params: updated });
                    }}
                  />
                </div>
                <button
                  type="button"
                  className="sap__params__remove"
                  onClick={() => updateProduct({ params: product.params.filter((_, i) => i !== index) })}
                >
                  🗑
                </button>
              </div>
            ))}
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
        </form>
      </section>
      <Footer />
    </section>
  );
};