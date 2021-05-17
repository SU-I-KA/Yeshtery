
import React, { Component } from "react";

import {data} from './services/data'
// import axios from 'axios'

// const data = require('./services/data.json')

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    selectedProducts: [],
    newestOffer: {},
    headerData: data.headerData,
    navLinks: [],
    initialCount: null,
    sortBy: '',
    offers: [],
    categories: [],
    categoriesNames:[],
    brands: [],
    stores: [],
    gifts: [],
    featured: {},
    promo: {},
    footer: {},
    icons: {},
    // loading: false,
  };


  getData(){
    console.log(data)
    this.setState({
      products: data.products,
      categories: data.categories,

      headerData: data.headerData,
      navLinks: data.navLinks,

      promo: data.featuredVideo,
      footer: data.footer,
      icons: data.icons,
      initialCount: 4,
    }
    , this.setFilters
    );
  }

/*
  async fetchData(){
    const response = await fetch('./src/services/data.json'
    , {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    }
    );
    const data = await response.json();
    console.log(data)
    this.setState({
      products: data.products,
      categories: data.categories,
      promo: data.featuredVideo,
      footer: data.footer,
      initialCount: 4,
    }
    , this.setFilters
    );
  }
*/

  componentDidMount() {
    // this.fetchData()
    this.getData()
  };

  setFilters = () => {
    let {categories} = this.state;
    let names = categories.map(category => category.name);
    const filterBy = names[0];

    const selectedCategory = categories.filter(category => category.name === filterBy);
    const categoryObject = selectedCategory[0];

    let first = categoryObject.brands[0]

    const newProducts = this.getProducts(filterBy);
    const newestOffer = this.getOffer(data.offers)

    this.setState({
      offers: categoryObject.offers,
      brands: categoryObject.brands,
      stores: categoryObject.stores,
      gifts: categoryObject.gifts,
      categoriesNames: names,
      sortBy: filterBy,
      featured: first,
      selectedProducts: newProducts,
      newestOffer: newestOffer,
    });
  }

  getOffer = (offers) => {
    let index = Math.floor((Math.random() * offers.length));
    return offers[index]
  };

  filterItems = (type, value) =>{
    let {categories} = this.state;
    const filteredItem = categories.filter(category => category.name === value);
    //console.log(filteredItem, sortBy)
    const filteredObj = filteredItem[0][type];
    if(type === 'brands'){
        this.setState({
        [type]: filteredObj,
      }
      , ()=>this.getFeatured(filteredObj[0])
      );
    } else{
      this.setState({
        [type]: filteredObj,
      });
    }

  };


  getFeatured = (array)=>{
    this.setState({
      featured: array
    });
  }

  getProducts = (value) => {
    let {products} = this.state;
    const displayProducts = products.filter( product => product.category.title === value);
    this.setState({
      selectedProducts: displayProducts,
    })
    return displayProducts
  }
  
  getUnique = (items, value) => {
    let myMap = new Map();
    let categories = [];
    for(let i=0; i<items.length; i++){
        let category = items[i][value];
        const check = myMap.get(category.title);
        if(!check){
            categories.push(category);
            myMap.set(category.title, category.title)
        }
        else{
            continue
        }
    }
    console.log(categories);
    return categories
  }
  
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          filterItems: this.filterItems,
          getUnique: this.getUnique,
          getFeatured: this.getFeatured,
          getProducts: this.getProducts,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

// Higher Order Component
export function SectionContainer (Component) {
  return function ConsumerWrapper (props) {
    return <ProductConsumer>
      {value => <Component {...props} context={value} />}
    </ProductConsumer>
  }
}


export { ProductProvider, ProductConsumer, ProductContext };