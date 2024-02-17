import React from 'react';
import './FeaturedProducts.css';
import sofaImage from './images/sofa.jpg';
import coffetableImage from './images/coffe-table.jpg';
import diningTableImage from './images/dining-table.jpg';
import soffaImage from './images/soffa.png';
import bedImage from './images/bed.png';
import tvstandImage from './images/tvstand.png';


const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Sleek Sofa',
      image: sofaImage,
      price: '450000',
    },
    {
      id: 2,
      name: 'Elegant Dining Set',
      image: diningTableImage,
      price: '15000',
    },
    {
      id: 3,
      name: 'Modern Coffee Table',
      image: coffetableImage,
      price: '10000',
    },
    {
      id: 4,
      name: 'soffa',
      image: soffaImage,
      price: '450000',
    },
    {
      id: 5,
      name: 'bed',
      image: bedImage,
      price: '30000',
    },
    {
      id: 6,
      name: 'tvstand',
      image: tvstandImage,
      price: '10000',
    },
  ];

  return (
    <div className="featured-products-container">
      <h2>Featured Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;