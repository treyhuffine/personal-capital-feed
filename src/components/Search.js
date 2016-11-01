import React from 'react';
import SingleProduct from './SingleProduct';
import './Search.css';

let Search = ({
    handleKeyUp,
    handleClick,
    autocompleteList,
    searchString,
    setSearchResult}) => {

  const autocomplete = autocompleteList.map(function(product, idx) {
    return (
      <SingleProduct
        productName={product.name}
        productLink={product.url}
        key={"autocomplete-"+idx}
        setSearchResult={setSearchResult}
      />
    )
  });

  return (
    <div className="Search">
      <div className="container">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <label htmlFor="search">Search financial data feed</label>
                <input
                  id="search"
                  type="text"
                  className="validate"
                  onKeyUp={handleKeyUp}
                />
              </div>
            </div>
            <div className="Search-autcomplete-wrapper"
              style={{display: autocomplete.length > 0 ? 'block' : 'none'}}
            >
              <div className="Search-autocomplete">
                <ul className="collection">
                  {autocomplete}
                </ul>
              </div>
            </div>
            <button
              className="btn waves-effect waves-light right"
              onClick={handleClick}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
