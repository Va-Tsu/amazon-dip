import { Footer } from "../../../assets/Footer";
import { Header } from "../../../assets/Header";

export function YommingoAboutPage() {
  return (  
    <section className="about">
      <Header />
        <div className="about__content">
          <p className="about__breadcrumb">Home / About us</p>

          <div className="about__info">
            <div className="about__info__block">
              <h1 className="about__info__title">About Yommingo</h1>
              <p className="about__info__subtitle">A better way to experience food from around the world.</p>
              <p className="about__info__text">
                We believe that great meals begin with great ingredients. Our mission is to make premium, authentic food from every corner of the globe easily accessible to everyone
              </p>
            </div>
            <img className="about__info__img" src="/imgs/img/about/inf.png" alt="" />
          </div>

          <div className="about__story">
            <div className="about__story__block">
              <h1 className="about__story__title">Our Story</h1>
              <p className="about__story__text">
                Welcome to Yommingo — your trusted online marketplace for fresh, high-quality food. We believe that great meals begin with great ingredients, and our mission is to make those ingredients easily accessible to everyone.
              </p>
              <p className="about__story__text">
                At Yommingo, we bring together carefully selected farmers, producers, and food brands in one convenient place. Whether you're looking for everyday essentials, organic products, international flavors, or specialty items, our platform is designed to help you discover food you'll truly enjoy.
              </p>
              <p className="about__story__text">
                We are passionate about quality, transparency, and convenience. Every product featured on Yommingo is chosen with care to ensure it meets our standards for freshness, taste, and reliability.
              </p>
            </div>
            <img className="about__story__img" src="/imgs/img/about/st.png" alt="" />
          </div>

          <div className="about__mission">
            <h1 className="about__mission__title">Our Mission</h1>
            <p className="about__mission__subtitle">
              To create a diverse food ecosystem that empowers businesses and delights customers, making premium food shopping easier, faster, and more enjoyable for everyone.
            </p>
            <div className="about__mission__grid">
              <div className="about__mission__card">
                <img src="" alt="" className="about__mission__card__img" />
                <div className="about__mission__card__text">
                  <h2 className="about__mission__card__title">Carefully Curated Products</h2>
                  <p className="about__mission__card__subtitle">Each item on our platform is handpicked and evaluated for quality, authenticity, and taste.</p>
                </div>
              </div>
              <div className="about__mission__card">
                <img src="" alt="" className="about__mission__card__img" />
                <div className="about__mission__card__text">
                  <h2 className="about__mission__card__title">Global Marketplace</h2>
                  <p className="about__mission__card__subtitle">Access unique food products from 50+ countries, connecting you with authentic international flavors.</p>
                </div>
              </div>
              <div className="about__mission__card">
                <img src="" alt="" className="about__mission__card__img" />
                <div className="about__mission__card__text">
                  <h2 className="about__mission__card__title">Fast & Reliable Delivery</h2>
                  <p className="about__mission__card__subtitle">Enjoy dependable delivery services that bring fresh products right to your doorstep on time.</p>
                </div>
              </div>
              <div className="about__mission__card">
                <img src="" alt="" className="about__mission__card__img" />
                <div className="about__mission__card__text">
                  <h2 className="about__mission__card__title">Secure Shopping Experience</h2>
                  <p className="about__mission__card__subtitle">Shop with confidence using our encrypted payment system and buyer protection guarantee.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about__stats">
            <div className="about__stats__item">
              <h2 className="about__stats__count">10,000+</h2>
              <p className="about__stats__label">Premium Products</p>
            </div>
            <div className="about__stats__item">
              <h2 className="about__stats__count">500+</h2>
              <p className="about__stats__label">Trusted Brands</p>
            </div>
            <div className="about__stats__item">
              <h2 className="about__stats__count">50+</h2>
              <p className="about__stats__label">Countries</p>
            </div>
            <div className="about__stats__item">
              <h2 className="about__stats__count">10,000+</h2>
              <p className="about__stats__label">Happy Customers</p>
            </div>
          </div>

          <div className="about__vision">
            <div className="about__vision__top">
              <div className="about__vision__block">
                <h1 className="about__vision__title">Our Vision</h1>
                <p className="about__vision__text">
                  We are passionate about quality, transparency, and convenience. Every product featured on Yommingo is chosen with care to ensure it meets our standards for freshness, taste, and reliability. By supporting both well-known brands and local suppliers, we help create a diverse food ecosystem while empowering businesses to reach more customers.
                </p>
                <p className="about__vision__text">
                  Our goal is simple: make food shopping easier, faster, and more enjoyable. With a user-friendly experience, secure ordering, and dependable delivery, Yommingo allows you to spend less time searching and more time savoring what matters.
                </p>
              </div>
              <img className="about__vision__img" src="/imgs/img/about/vis.png" alt="" />
            </div>
            <p className="about__vision__tagline">Yommingo — bringing good food closer to you.</p>
          </div>

          <div className="about__join">
            <h2 className="about__join__title">Join Yommingo Today</h2>
            <p className="about__join__subtitle">
              Discover thousands of premium food products from around the world. Start your culinary journey with us and experience the difference quality makes.
            </p>
            <div className="about__join__actions">
              <button className="about__join__btn about__join__btn--primary">Explore Catalog</button>
              <button className="about__join__btn about__join__btn--secondary">Create Account</button>
            </div>
          </div>
        </div>
      <Footer />
    </section>
  );
};