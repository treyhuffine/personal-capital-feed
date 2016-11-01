import React from 'react';
import './SingleProduct.css';

let SingleProduct = ({ productName, productLink, setSearchResult }) => {
  return (
    <a
      href={productLink}
      className="SingleProduct collection-item"
      onClick={(e) => {
        if (setSearchResult) {
          e.preventDefault();
          setSearchResult(productName);
        }
      }}
    >
      {productName}
    </a>
  );
}

export default SingleProduct;
