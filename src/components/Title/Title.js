import React from 'react'
import styles from './Title.module.scss'

export default function Title({ title, text }) {
  return (
    <div className={styles.sectionTitle}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}
