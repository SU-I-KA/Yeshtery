import React, { Component } from 'react'
import styles from './FooterInfo.module.scss'

class FooterInfo extends Component {
  render() {
    if (!this.props.info || this.props.info.length === 0) {
      return this.props.fallback
    } else {
      return (
        <>
          <div className={styles.rights}>
            <p>{this.props.info.rights}</p>
          </div>
          <ul className={styles.info}>
            {this.props.info.imgs.map((item, index) => {
              return (
                <li key={index}>
                  <img src={item} alt='pay method' />
                </li>
              )
            })}
          </ul>
          <div className={styles.poweredBy}>
            <p>powered by</p>
            <img src={this.props.info.poweredBy.logo} alt='nasnav' />
          </div>
        </>
      )
    }
  }
}

export default FooterInfo
