import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Store.module.scss'

import DropDownStoreMenu from '../DropDownStoreMenu/DropDownStoreMenu'

const Store = ({ store }) => {
  const { title, logo, bg, branchs } = store
  const storeBgStyle = {
    backgroundImage: `url(${bg})`,
  }
  return (
    <div style={storeBgStyle} className={styles.singleStore}>
      <div className={styles.overlay}></div>
      <div className={styles.branchLogo}>
        <div className={styles.logoImgWrap}>
          <img src={logo} alt={title} />
        </div>
        <h3>{title}</h3>
      </div>

      <div className={styles.row}>
        <DropDownStoreMenu optionsList={branchs} name='branchs' />
        <div className={styles.btnStoreShopping}>
          <Link to='/'>Start Shopping</Link>
        </div>
      </div>
    </div>
  )
}

export default Store
