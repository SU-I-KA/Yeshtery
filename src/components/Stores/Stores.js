import React from 'react'
import styles from './Stores.module.scss'

import SectionHeader from '../SectionHeader/SectionHeader'
import Store from '../Store/Store'

const Stores = ({ sortBy, filterItems, categoriesNames, stores }) => {
  return (
    <div className={styles.stores}>
      <SectionHeader
        title='Take a virtual tour'
        text='Marketing pleasure through 360 technology'
        defaultOption={sortBy}
        filterItems={filterItems}
        optionsList={categoriesNames}
        name='stores'
        url='/'
      />
      <div className={styles.storeGrid}>
        {stores.map((item) => {
          return <Store key={item.id} store={item} />
        })}
      </div>
    </div>
  )
}

export default Stores
