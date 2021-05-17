import React, { Component, lazy, Suspense } from 'react'
import Categories from '../components/Categories'
// import Offers from '../components/Offers'
// import Brands from '../components/Brands'
// import VirtualTours from '../components/VirtualTours'
// import Gifts from '../components/Gifts'
import Promo from '../components/Promo'


// import ProductsList from '../components/ProductsList'

// const Categories = lazy(() => import('../components/Categories'))
const Offers = lazy(() => import('../components/Offers'))
const Brands = lazy(() => import('../components/Brands'))
const VirtualTours = lazy(() => import('../components/VirtualTours'))
const ProductsList = lazy(() => import('../components/ProductsList'))
const Gifts = lazy(() => import('../components/Gifts'))

export class MainPage extends Component {
  render() {
    return (
    <div className="row">
      <div className="container">
        <Categories />
        <Suspense fallback={<div className='loading'>stop! just loading...</div>} >
          <Offers />
          <Brands />
          <VirtualTours />
          <ProductsList />
          <Gifts />
        </Suspense>
        <Promo />
      </div>
    </div>
  );
  }
}

export default MainPage