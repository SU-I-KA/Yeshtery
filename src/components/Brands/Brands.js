import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Brands.module.scss'

import SectionHeader from '../SectionHeader/SectionHeader'
import Brand from '../Brand/Brand'

class Brands extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedBrand: null,
    }
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      selectedBrand: nextProps.selectedBrand,
    }
  }

  render() {
    const { sortBy, categoriesNames, filterItems, brands, getBrand } =
      this.props
    const { selectedBrand } = this.state
    return (
      <div className={styles.brandSection}>
        <SectionHeader
          title='Shop by brand'
          text='Explore products by your favourite brands.'
          defaultOption={sortBy}
          filterItems={filterItems}
          optionsList={categoriesNames}
          name='brands'
          url='/'
        />

        {selectedBrand && (
          <div className={styles.brandBanner}>
            <div className={styles.textContainer}>
              <h3>{selectedBrand.title}</h3>
              <img src={selectedBrand.logo} alt={selectedBrand.title} />
              <p>{selectedBrand.slogan}</p>
              <div className={styles.btnShop}>
                <Link to='/'>shop now</Link>
              </div>
            </div>
            <div className={styles.brandImgContainer}>
              <img src={selectedBrand.banner} alt={selectedBrand.title} />
            </div>
          </div>
        )}
        <div className={styles.brandGrid}>
          {brands?.map?.((item) => {
            return <Brand key={item.id} item={item} getBrand={getBrand} />
          })}
        </div>
      </div>
    )
  }
}

export default Brands
