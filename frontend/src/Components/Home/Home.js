import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';

const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />
      <div className="products-container">
        <section id="products">
          <h2>Products</h2>
          <div className="product-images">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
              <img key={index} src={`https://picsum.photos/600?random=${index}`} alt={`Product ${index}`} />
            ))}
          </div>
        </section>
      </div>
      <div className="ourMotto-container">
        <section id="ourMotto">
          <h2>Our Motto</h2>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
            <img key={index} src={`https://picsum.photos/300?random=${index}`} alt={`Product ${index}`} />
          ))}
          <p>
            At Our E-commerce, we are committed to providing high-quality products
            and exceptional customer service. Explore our collection and discover
            the perfect items for your lifestyle.
          </p>
        </section>
      </div>
      <div className="aboutUs-container">
        <section id="aboutUs">
          <h2>About Us</h2>
          <p>
            Welcome to Our E-commerce, your go-to destination for all your
            shopping needs. We strive to offer a seamless online shopping
            experience with a wide range of products and secure transactions.
            Join our community of satisfied customers today!
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
