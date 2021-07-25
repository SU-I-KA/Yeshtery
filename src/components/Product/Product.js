import React from 'react'
import styles from './Product.module.scss'

import Display360 from '../Display360/Display360'

const Product = ({ product }) => {
  const { title, image, price, brand, rate, pickup } = product
  const ratingArray = new Array(5)
    .fill('./images/star.svg', 0, rate)
    .fill('./images/empty-star.svg', rate, 5)
  return (
    <div className={styles.singleProduct}>
      <div className={styles.display360}>
        <Display360 />
      </div>
      <div className={styles.imgContainer}>
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className={styles.row}>
        <div className={styles.price}>
          <div className={styles.currentPrice}>
            {price.currentPrice} <span>{price.symbol}</span>
          </div>
          {Boolean(price.discount) && (
            <div className={styles.discountSection}>
              <div className={styles.oldPrice}>
                {price.oldPrice} <span>{price.symbol}</span>
              </div>
              <div className={styles.discountValue}>{price.discount}</div>
            </div>
          )}
        </div>
        <img src={brand.img} alt={title} />
      </div>
      <div className={styles.rateWrap}>
        <div className={styles.stars}>
          {ratingArray.map((icon, index) => {
            return <img src={icon} key={index} alt='star' />
          })}
        </div>
        <div className={styles.rate}>{rate} of 5</div>
      </div>
      <div className={styles.pickup}>
        pickup from: <span>{pickup}</span>
      </div>
    </div>
  )
}

export default Product
