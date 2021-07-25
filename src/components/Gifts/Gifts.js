import React from 'react'
import styles from './Gifts.module.scss'

import SectionHeader from '../SectionHeader/SectionHeader'
import Gift from '../Gift/Gift'

const Gifts = ({ sortBy, filterItems, categoriesNames, gifts }) => {
  return (
    <div className={styles.giftSection}>
      <SectionHeader
        title='Gifts On Budget'
        text='Choose your gift within your budget.'
        defaultOption={sortBy}
        filterItems={filterItems}
        optionsList={categoriesNames}
        name='gifts'
        url='/'
      />
      <div className={styles.giftGrid}>
        {gifts.map((item) => {
          return <Gift gift={item} key={item.id} />
        })}
      </div>
    </div>
  )
}

export default Gifts
