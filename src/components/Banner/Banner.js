import React, { Component } from 'react'
import styles from './Banner.module.scss'

export class Hero extends Component {
  render() {
    const { headerData } = this.props
    const { image, title, text } = headerData.banner

    const BannerStyle = {
      backgroundImage: `url(${image})`,
    }

    this.submitSearch = (e) => {
      // prevent default just for now
      e.preventDefault()
    }

    return (
      <header style={BannerStyle} className={styles.header}>
        <div className={styles.container}>
          <div className={styles.searchGroup}>
            <div className={styles.text}>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>

            <form onSubmit={this.submitSearch}>
              <div className={styles.formGroup}>
                <div className={styles.formControl}>
                  <input
                    className={styles.inputText}
                    type='text'
                    name=''
                    placeholder='What are you looking for?'
                    id=''
                  />
                </div>

                <div className={styles.formControl}>
                  <button className={styles.btnSearch}>search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </header>
    )
  }
}

export default Hero
