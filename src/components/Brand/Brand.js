import React from 'react'
import styles from './Brand.module.scss'

export default function Brand({ item, getBrand }) {
  const { title, logo } = item
  return (
    <div className={styles.singleBrand} onClick={() => getBrand(item)}>
      <img src={logo} alt={title} />
      <p>{title}</p>
    </div>
  )
}
