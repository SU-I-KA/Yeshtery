import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from './Category.module.scss'
import SectionHeader from '../SectionHeader/SectionHeader'

class Categories extends Component {
  render() {
    const { products, getUnique } = this.props
    const categories = getUnique(products, 'category')

    return (
      <div className={styles.categories}>
        <SectionHeader
          title='shop by category'
          text='find what you are looking for by category'
          defaultOption={null}
          filterItems={null}
          optionsList={null}
          name={null}
          url='/'
        />
        {products && (
          <div className={styles.categoryList}>
            {categories.map((item, index) => {
              const { title, text, img } = item
              const categoryStyles = {
                backgroundImage: `url(${img})`,
              }
              return (
                <div
                  key={index}
                  style={categoryStyles}
                  className={styles.singleCategory}
                >
                  <h2>{title}</h2>
                  <p>{text}</p>
                  <div className={styles.btnExplore}>
                    <Link to='/'>explore</Link>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }
}

export default Categories
