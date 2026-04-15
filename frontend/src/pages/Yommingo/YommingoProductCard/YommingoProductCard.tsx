import { useParams } from "react-router-dom";
import { Header } from "../../../assets/Header";
import { Footer } from "../../../assets/Footer";
import { useEffect, useState } from "react";
import type {ProductFull } from "../../../types/product";
import { getProductById } from "../../../api/product";
import { imgUrl } from "../../../utils/imageUrl";


export function YommingoProductCard() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductFull | null>(null);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comments, setComments] = useState<ProductFull['comments']>([]);
  const [commentText, setCommentText] = useState('');
  const [value, setValue] = useState(1);

  useEffect(() => {
    if (!id) return;
    getProductById(id)
      .then(p => {
        setProduct(p);
        setComments(p.comments);
      })
      .catch(console.error);
  }, [id]);

  const handlePublish = () => {
    if (!commentText.trim() || rating === 0) return;
    const newComment = {
      id: String(Date.now()),
      userId: '',
      userName: 'You',
      content: commentText,
      rating,
      date: new Date().toISOString(),
    };
    setComments(prev => [...prev, newComment]);
    setCommentText('');
    setRating(0);
  };

  if (!product) return <h1>Product not found</h1>;

  return (
    <section className="Ypc">
      <Header />
      <div className="Ypc__route">

      </div>
      <main className="Ypc__main">
        <section className="Ypc__productCard">
          <section className="Ypc__productCard__topInfo">
            <img src={imgUrl(product.photoUrl)} alt={product.title} className="Ypc__productCard__topInfo__img" />
            <div className="Ypc__productCard__topInfo__text">
              <h1 className="Ypc__productCard__topInfo__text__title">{product.title}</h1>
              <p className="Ypc__productCard__topInfo__text__description">{product.description}</p>
            </div>
          </section>
          <p className="Ypc__productCard__price">${product.price.toFixed(2)}</p>
          <section className="Ypc__productCard__downInfo">
            <div className="Ypc__productCard__downInfo__sertificate">
              <a href="" className="Ypc__productCard__downInfo__sertificate__title">Wholesale / Retail</a>
              <a href="" className="Ypc__productCard__downInfo__sertificate__title">Certificates</a>
            </div>
            <form className="Ypc__productCard__downInfo__form">
              <div className="Ypc__productCard__downInfo__counter">
                <button 
                  className="Ypc__productCard__downInfo__counter__btn empty__style" 
                  onClick={() => setValue(v => v + 1)}
                  type="button"
                >
                  +
                </button>
                <div className="Ypc__productCard__downInfo__counter__value empty__style">{value}</div>
                <button 
                  className="Ypc__productCard__downInfo__counter__btn empty__style" 
                  onClick={() => setValue(v => v > 1 ? v - 1 : 1)}
                  type="button"
                >
                  -
                </button>
              </div>
              <button className="Ypc__productCard__downInfo__addButton">Buy</button>
            </form>
          </section>
          <section className="Ypc__productCard__information">
            <h2 className="Ypc__productCard__information__title">Product information</h2>
            <ul className="Ypc__productCard__information__list">
              {product.information?.map((item, index) => (
                <li key={index} className="Ypc__productCard__information__list__item">
                  <span className="Ypc__productCard__information__list__item__label">{item.label}</span>
                  <span className="Ypc__productCard__information__list__item__value">{item.value}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="Ypc__productCard__details">
            <h2 className="Ypc__productCard__details__title">Product details</h2>
            <p className="Ypc__productCard__details__description">{product.description}</p>
          </section>

        </section>

        <section className="Ypc__productCard__comments">
          <h2 className="Ypc__productCard__comments__title">Comments</h2>
          {comments?.map((comment) => (
            <div key={comment.id} className="Ypc__productCard__comments__comment">
              <span className="Ypc__productCard__comments__comment__username">{comment.userName}</span>
              <p className="Ypc__productCard__comments__comment__content">{comment.content}</p>
              <span className="Ypc__productCard__comments__comment__header__rating">
                {Array.from({ length: 5 }, (_, i) => (
                  <img
                    key={i}
                    src={i < comment.rating ? '/imgs/icons/productCard/starYea.svg' : '/imgs/icons/productCard/starNo.svg'}
                    alt="star"
                  />
                ))}
              </span>
              <span className="Ypc__productCard__comments__comment__date">{new Date(comment.date).toLocaleDateString()}</span>
            </div>
          ))}

          <div className="Ypc__productCard__comments__add">
            <h3 className="Ypc__productCard__comments__add__title">New comment:</h3>
            <div className="Ypc__productCard__comments__add__block">
              <textarea 
                className="Ypc__productCard__comments__add__block__textarea" 
                placeholder="Enter text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <button className="Ypc__productCard__comments__add__block__button" onClick={handlePublish}>Publish</button>
              <div className="Ypc__productCard__comments__add__block__stars">
              {Array.from({ length: 5 }, (_, i) => (
                <img
                  key={i}
                  src={(hover || rating) > i ? '/imgs/icons/productCard/starYea.svg' : '/imgs/icons/productCard/starNo.svg'}
                  alt="star"
                  onClick={() => setRating(i + 1)}
                  onMouseEnter={() => setHover(i + 1)}
                  onMouseLeave={() => setHover(0)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </section>
  );
}
