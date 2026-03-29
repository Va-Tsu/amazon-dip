import { useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  { title: 'Italy', img: '/imgs/icons/catalog/it.png', link: '/country/italy' },
  { title: 'Japan', img: '/imgs/icons/catalog/jp.png', link: '/country/japan' },
  { title: 'Spain', img: '/imgs/icons/catalog/sp.png', link: '/country/spain' },
  { title: 'Germany', img: '/imgs/icons/catalog/ge.png', link: '/country/germany' },
  { title: 'France', img: '/imgs/icons/catalog/fr.png', link: '/country/france' },
];

export function Slider() {
  const [current, setCurrent] = useState(0);
  const itemWidth = 316;

  const prev = () => setCurrent(i => i === 0 ? slides.length - 1 : i - 1);
  const next = () => setCurrent(i => i === slides.length - 1 ? 0 : i + 1);

  const loopedSlides = [...slides, ...slides, ...slides];
  const offset = slides.length;

  return (
    <div className="sliderblock">
      <div className="slider__header">
        <h2 className="slider__title">Catalog</h2>
        <div className="slider__btns">
          <button className="slider__btn" onClick={prev}>←</button>
          <button className="slider__btn" onClick={next}>→</button>
        </div>
      </div>

      <div className="slider">
        <div
          className="slider__track"
          style={{ transform: `translateX(-${(current + offset) * itemWidth}px)` }}
        >
          {loopedSlides.map((slide, i) => (
            <Link key={i} to={slide.link} className="slider__item">
              <span>{slide.title}</span>
              <img src={slide.img} alt={slide.title} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}