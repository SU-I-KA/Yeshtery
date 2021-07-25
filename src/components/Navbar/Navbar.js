import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'

import { data } from '../../services/data'

import LeftAngle from '../LeftAngle/LeftAngle'
import RightAngle from '../RightAngle/RightAngle'
import HamBurger from '../HamBurger/HamBurger'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headerData: null,
      navLinks: null,
      newestOffer: null,
    }
  }

  getOffer = (offers) => {
    let index = Math.floor(Math.random() * offers.length)
    return offers[index]
  }

  getData = () => {
    const newestOffer = this.getOffer(data.offers)
    this.setState({
      headerData: data.headerData,
      navLinks: data.navLinks,
      newestOffer,
    })
  }

  componentDidMount() {
    // data fetching
    this.getData()
  }

  render() {
    const { newestOffer, headerData, navLinks } = this.state

    return (
      <>
        {headerData && (
          <div className={styles.navbarContainer}>
            <div className={styles.topSection}>
              <div className={styles.container}>
                <div className={styles.row}>
                  <div className={styles.offer}>
                    <div className={styles.row}>
                      <LeftAngle />
                      {newestOffer && (
                        <h3>
                          {newestOffer.text}
                          <Link to={newestOffer.url}> shop now</Link>
                        </h3>
                      )}
                      <RightAngle />
                    </div>
                  </div>

                  <div className={styles.contacts}>
                    {headerData.topSection.map((item) => {
                      const { id, url, text, icon } = item
                      return (
                        <div key={id} className={styles.contactItem}>
                          <img className={styles.icon} src={icon} alt={text} />
                          <Link to={url}>{text}</Link>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.medSection}>
              <div className={styles.container}>
                <div className={styles.row}>
                  <div className={styles.leftCol}>
                    <div className={styles.ham}>
                      <HamBurger />
                    </div>
                    <Link to='/'>
                      <img
                        src={headerData.logo}
                        alt='logo'
                        className={styles.logo}
                      />
                    </Link>
                  </div>
                  <div className={styles.rightCol}>
                    {headerData.medSection &&
                      headerData.medSection.map((item) => {
                        const { id, url, text, icon } = item
                        return (
                          <div key={id} className={styles.navItem}>
                            <img src={icon} alt={text} />
                            <Link to={url}>{text}</Link>
                          </div>
                        )
                      })}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.navbarLinks}>
              <div className={styles.container}>
                <div className={styles.row}>
                  {navLinks.map((link) => {
                    const { id, url, text, active } = link
                    return (
                      <Link
                        to={url}
                        key={id}
                        className={`${styles.navLink} ${
                          active && styles.active
                        }`}
                      >
                        {text}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
}
