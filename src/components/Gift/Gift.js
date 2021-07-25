import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Gift.module.scss'

export default function Gift({ gift }) {
  const { offer, symbol, image } = gift
  const giftBgStyle = {
    backgroundImage: `url(${image})`,
  }
  return (
    <Link to='/' className={styles.singleGift} style={giftBgStyle}>
      <h2>
        {offer} <span>{symbol}</span>
      </h2>
    </Link>
  )
}
