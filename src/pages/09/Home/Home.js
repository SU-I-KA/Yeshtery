import React, { Component, lazy, Suspense } from 'react'
import styles from './Home.module.scss'
import { data } from '../../../services/data'

import Category from '../../../components/Category/Category'
import OfferSectionContainer from '../../../components/OfferSectionContainer/OfferSectionContainer'
import Brands from '../../../components/Brands/Brands'
import Stores from '../../../components/Stores/Stores'
import ProductsList from '../../../components/ProductsList/ProductsList'
import Gifts from '../../../components/Gifts/Gifts'
import PromoVideo from '../../../components/PromoVideo/PromoVideo'
const Banner = lazy(() => import('../../../components/Banner/Banner'))

export class MainPage extends Component {
  state = {
    headerData: null,
    products: [],
    sortBy: '',
    offers: [],
    categories: [],
    categoriesNames: null,
    brands: [],
    selectedBrand: null,
    stores: [],
    selectedProducts: [],
    gifts: [],
    promo: null,
  }

  getData = () => {
    this.setState(
      {
        headerData: data.headerData,
        products: data.products,
        categories: data.categories,
        promo: data.featuredVideo,
      },
      () => this.setFilters()
    )
  }

  setFilters = () => {
    const { categories, products } = this.state
    const categoryObjects = this.getUnique(products, 'category')
    const categoryList = categoryObjects.map((category) => category.title)
    const sortBy = categoryList[0]
    console.log(categoryList)

    const selectedCategory = categories.filter(
      (category) => category.name === sortBy
    )
    const selectedCategoryObject = selectedCategory[0]
    const selectedBrand = selectedCategoryObject.brands[0]
    const selectedProducts = this.filterItems('selectedProducts', sortBy)
    this.setState(
      {
        offers: selectedCategoryObject.offers,
        sortBy: sortBy,
        categoriesNames: categoryList,
        brands: selectedCategoryObject.brands,
        selectedBrand: selectedBrand,
        stores: selectedCategoryObject.stores,
        selectedProducts: selectedProducts,
        gifts: selectedCategoryObject.gifts,
      },
      () => console.log(this.state.categoriesNames)
    )
  }

  componentDidMount() {
    // fetch api data
    this.getData()
  }

  getUnique = (items, value) => {
    let myMap = new Set()
    let categories = []
    for (let i = 0; i < items.length; i++) {
      let category = items[i][value]
      const check = myMap.has(category.title)
      if (!check) {
        categories.push(category)
        myMap.add(category.title)
      }
    }
    console.log(myMap)
    // this.setState({
    //   categoriesNames: myMap,
    // })
    return categories
  }

  filterItems = (type, value) => {
    const { categories, products } = this.state

    const filteredItem = categories.filter(
      (category) => category.name === value
    )
    if (type === 'selectedProducts') {
      const displayProducts = products.filter(
        (product) => product.category.title === value
      )
      this.setState({
        selectedProducts: displayProducts,
      })
      return displayProducts
    }
    if (filteredItem.length > 0 && filteredItem !== null) {
      const filteredObj = filteredItem[0][type]
      if (type === 'brands') {
        this.setState(
          {
            [type]: filteredObj,
          },
          () => this.getBrand(filteredObj[0])
        )
      } else {
        this.setState({
          [type]: filteredObj,
        })
      }
    }
  }

  getBrand = (array) => {
    this.setState({
      selectedBrand: array,
    })
  }

  render() {
    const {
      headerData,
      products,
      sortBy,
      categoriesNames,
      offers,
      brands,
      selectedBrand,
      stores,
      selectedProducts,
      gifts,
      promo,
    } = this.state
    return (
      <>
        <Suspense
          fallback={
            <div className={styles.container}>
              <div className={styles.loading}>stop! just loading...</div>
            </div>
          }
        >
          <Banner headerData={headerData} />
        </Suspense>
        <div className={styles.row}>
          <div className={styles.container}>
            <Category products={products} getUnique={this.getUnique} />
            <OfferSectionContainer
              sortBy={sortBy}
              categoriesNames={categoriesNames}
              offers={offers}
              filterItems={this.filterItems}
            />
            <Brands
              sortBy={sortBy}
              categoriesNames={categoriesNames}
              brands={brands}
              filterItems={this.filterItems}
              selectedBrand={selectedBrand}
              getBrand={this.getBrand}
            />
            <Stores
              sortBy={sortBy}
              categoriesNames={categoriesNames}
              stores={stores}
              filterItems={this.filterItems}
              selectedBrand={selectedBrand}
              getBrand={this.getBrand}
            />
            <ProductsList
              sortBy={sortBy}
              categoriesNames={categoriesNames}
              filterItems={this.filterItems}
              selectedProducts={selectedProducts}
            />
            <Gifts
              sortBy={sortBy}
              categoriesNames={categoriesNames}
              filterItems={this.filterItems}
              gifts={gifts}
            />
            <PromoVideo promo={promo} />
          </div>
        </div>
      </>
    )
  }
}

export default MainPage
