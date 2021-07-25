import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ViewAllBtn.module.scss'

export default function ViewAllBtn({ url }) {
  return (
    <div className={styles.btnViewall}>
      <Link to={url}>view all</Link>
    </div>
  )
}
