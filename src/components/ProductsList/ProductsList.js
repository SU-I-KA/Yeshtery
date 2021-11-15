import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from './ProductsList.module.scss'
import SectionHeader from '../SectionHeader/SectionHeader'
import Product from '../Product/Product'

class ProductsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 4,
      error: { active: false, msg: '' },
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.selectedProducts !== prevProps.selectedProducts) {
      this.setState({
        counter: 4,
        error: { active: false, msg: '' },
      })
    }
  }

  showMore = () => {
    let { selectedProducts } = this.props
    const count = this.state.counter + 1
    if (count > selectedProducts.length) {
      return this.setState({
        error: { active: true, msg: `that's it. no more!` },
      })
    } else {
      return this.setState({
        counter: count,
      })
    }
  }

  render() {
    const { sortBy, filterItems, categoriesNames, selectedProducts } =
      this.props
    const { counter } = this.state

    return (
      <div className={styles.productSection}>
        <SectionHeader
          title='Our Special Selection'
          text='Premium products recommended just for you.'
          defaultOption={sortBy}
          filterItems={filterItems}
          optionsList={categoriesNames}
          name='selectedProducts'
          url='/'
        />
        {this.props.selectedProducts.length > 0 ? (
          <div className={styles.productGrid}>
            {selectedProducts?.slice?.(0, counter)?.map?.((item) => {
              const LinkStyle = {
                textDecoration: 'none',
              }
              return (
                <Link to='/' key={item.id} style={LinkStyle}>
                  <Product product={item} />
                </Link>
              )
            })}
          </div>
        ) : (
          <div className={styles.noMore}>no products in that category</div>
        )}

        {selectedProducts.length > 0 && (
          <div className={styles.moreSection}>
            {this.state.error.active ? (
              <div className={styles.noMore}>{this.state.error.msg}</div>
            ) : (
              <button className={styles.btnMore} onClick={this.showMore}>
                show more
              </button>
            )}
          </div>
        )}
      </div>
    )
  }
}

export default ProductsList
