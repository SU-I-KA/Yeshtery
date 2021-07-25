import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Offer.module.scss'

export default function Offer({ item }) {
  const { title, description, ads_img } = item
  const offerBgStyle = {
    backgroundImage: `url(${ads_img})`,
  }
  return (
    <Link to='/' className={styles.singleOffer} style={offerBgStyle}>
      <div className={styles.shadow}></div>
      <div className={styles.textOffer}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  )
}
