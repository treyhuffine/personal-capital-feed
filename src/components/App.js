import React, { Component } from 'react';
import Header from './Header';
import Description from './Description';
import Search from './Search';
import Results from './Results';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.updateSearchString = this.updateSearchString.bind(this)
    this.searchFeed = this.searchFeed.bind(this)
    this.containsSearchWord = this.containsSearchWord.bind(this)
    this.setSearchResult = this.setSearchResult.bind(this)
    this.state = {
      products: this.props.products.products,
      productDisplay: {
        credit: [],
        investment: [],
        loan: [],
        mortgage: [],
        bank: []
      },
      searchString: '',
      autocompleteList: []
    }
  }
  updateSearchString(e) {
    const totalAutocompletes = 8;
    let autocompleteList = [];
    let searchTerm =  e.target.value;

    this.state.products.forEach((product, idx) => {
      if (autocompleteList.length < totalAutocompletes
          && this.containsSearchWord(searchTerm, product)) {
        autocompleteList.push(product);
      }
    });
    this.setState({
      searchString: e.target.value,
      autocompleteList
    });
  }
  searchFeed(e) {
    e.preventDefault();
    let searchTerm = this.state.searchString.toLowerCase();
    let credit = [];
    let investment = [];
    let loan = [];
    let mortgage = [];
    let bank = [];

    this.state.products.forEach((product, idx) => {
      if (this.containsSearchWord(searchTerm, product)) {
        switch (product.type) {
          case 'CREDIT_CARD':
            credit.push(product)
            break;
          case 'INVESTMENT':
            investment.push(product)
            break;
          case 'LOAN':
            loan.push(product)
            break;
          case 'MORTGAGE':
            mortgage.push(product)
            break;
          case 'BANK':
            bank.push(product)
            break;
          default:
            // none
            break;
        }
      }
    });
    this.setState({
      productDisplay: {
        credit,
        investment,
        loan,
        mortgage,
        bank
      }
    })
  }
  containsSearchWord(searchTerm, product) {
    let isValid = product.name.toLowerCase().includes(searchTerm
            || product.type.toLowerCase().includes(searchTerm));
    return isValid;
  }
  setSearchResult(productName) {
    this.setState({
      searchString: productName,
      autocompleteList: []
    });

    document.getElementById('search').value = productName;
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Description />
        <Search
          handleKeyUp={this.updateSearchString}
          handleClick={this.searchFeed}
          autocompleteList={this.state.autocompleteList}
          setSearchResult={this.setSearchResult}
          searchString={this.state.searchString}
        />
        <Results
          productDisplay={this.state.productDisplay}
        />
      </div>
    );
  }
}

export default App;
