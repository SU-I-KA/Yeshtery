import React from 'react'
import styles from './OfferSectionContainer.module.scss'

import SectionHeader from '../SectionHeader/SectionHeader'
import Offer from '../Offer/Offer'

const OfferSectionContainer = ({
  sortBy,
  filterItems,
  categoriesNames,
  offers,
}) => {
  return (
    <div className={styles.offers}>
      <SectionHeader
        title='best offers'
        text='check out the latest discounts'
        defaultOption={sortBy}
        filterItems={filterItems}
        optionsList={categoriesNames}
        name='offers'
        url='/'
      />
      <div className={styles.offerGrid}>
        {offers.map((item) => {
          return <Offer key={item.id} item={item} />
        })}
      </div>
    </div>
  )
}

export default OfferSectionContainer
