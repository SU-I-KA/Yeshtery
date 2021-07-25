import React from 'react'
import { Link } from 'react-router-dom'
import styles from './FooterSocials.module.scss'

const FooterSocials = ({ socials }) => {
  return (
    <ul className={styles.footerSocial}>
      {socials?.map?.((item) => {
        const { id, name, icon, url } = item
        return (
          <li key={id}>
            <img src={icon} alt={name} />
            <Link to={url}>{name}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default FooterSocials
