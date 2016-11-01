import React from 'react';
import SingleProduct from './SingleProduct';
import './Results.css';

let Results = ({ productDisplay }) => {
  const creditCards = productDisplay.credit.map(function(product, idx) {
    return (
      <SingleProduct
        productName={product.name}
        productLink={product.url}
        key={"credit-"+idx}
      />
    )
  })
  const investments = productDisplay.investment.map(function(product, idx) {
    return (
      <SingleProduct
        productName={product.name}
        productLink={product.url}
        key={"investment-"+idx}
      />
    )
  })
  const loans = productDisplay.loan.map(function(product, idx) {
    return (
      <SingleProduct
        productName={product.name}
        productLink={product.url}
        key={"loan-"+idx}
      />
    )
  })
  const mortgages = productDisplay.mortgage.map(function(product, idx) {
    return (
      <SingleProduct
        productName={product.name}
        productLink={product.url}
        key={"mortgage-"+idx}
      />
    )
  })
  const banks = productDisplay.bank.map(function(product, idx) {
    return (
      <SingleProduct
        productName={product.name}
        productLink={product.url}
        key={"bank-"+idx}
      />
    )
  })

  return (
    <div className="Results container">
      <h4 className="Results-header">Results</h4>
      <div
        style={{display: productDisplay.credit.length > 0 ? 'block' : 'none'}}
      >
        <ul className="collection with-header">
           <li className="collection-header"><h5>Credit Cards</h5></li>
          {creditCards}
        </ul>
      </div>
      <div
        style={{display: productDisplay.investment.length > 0 ? 'block' : 'none'}}
      >
        <ul className="collection with-header">
           <li className="collection-header"><h5>Investments</h5></li>
          {investments}
        </ul>
      </div>
      <div
        style={{display: productDisplay.loan.length > 0 ? 'block' : 'none'}}
      >
        <ul className="collection with-header">
           <li className="collection-header"><h5>Loans</h5></li>
          {loans}
        </ul>
      </div>
      <div
        style={{display: productDisplay.mortgage.length > 0 ? 'block' : 'none'}}
      >
        <ul className="collection with-header">
           <li className="collection-header"><h5>Mortgages</h5></li>
          {mortgages}
        </ul>
      </div>
      <div
        style={{display: productDisplay.bank.length > 0 ? 'block' : 'none'}}
      >
        <ul className="collection with-header">
           <li className="collection-header"><h5>Bank</h5></li>
          {banks}
        </ul>
      </div>
    </div>
  );
}

export default Results;
