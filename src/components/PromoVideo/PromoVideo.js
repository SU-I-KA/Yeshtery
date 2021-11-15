import React, { Component } from 'react'
import styles from './PromoVideo.module.scss'

import Pause from '../Puase/Puase'

class PromoVideo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      puase: true,
    }
  }

  togglePlay = () => {
    this.setState({ puase: false })
  }

  render() {
    const { promo } = this.props
    const { puase } = this.state
    return (
      <div className={styles.container}>
        <div className={styles.promo}>
          {puase && (
            <div className={styles.puaseBtn} onClick={this.togglePlay}>
              <Pause className={styles.pause} />
            </div>
          )}
          <iframe
            className={styles.video}
            width='100%'
            height='680'
            title='promo'
            src={promo?.url}
          ></iframe>
        </div>
      </div>
    )
  }
}

export default PromoVideo
