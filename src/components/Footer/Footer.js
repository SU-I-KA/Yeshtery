import React, { Component } from 'react'
import styles from './Footer.module.scss'

import { data } from '../../services/data'

import FooterInfo from '../FooterInfo/FooterInfo'
import FooterLinks from '../FooterLinks/FooterLinks'
import FooterSocials from '../FooterSocials/FooterSocials'

import SubscribeIcon from '../SubscribeIcon/SubscribeIcon'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      footerData: null,
    }
  }

  getData = () => {
    this.setState({
      footerData: data.footer,
    })
  }

  componentDidMount() {
    // data fetching
    this.getData()
  }

  render() {
    const { footerData } = this.state

    return (
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerTopSection}>
            <div className={styles.info}>
              <img src={footerData?.logo} alt='logo' />
              <h4>{footerData?.first_text}</h4>
              <p>{footerData?.second_text}</p>
              <h4>{footerData?.third_text}</h4>
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.row}>
                <div className={styles.formSection}>
                  <form action=''>
                    <label htmlFor=''>Subscribe to our newsletter</label>
                    <div className={styles.formGroup}>
                      <input
                        className={styles.inputText}
                        type='text'
                        name=''
                        placeholder='enter your mail'
                      />
                      <button className={styles.btnSubscribe}>
                        <SubscribeIcon className={styles.send} />
                        <span>subscribe</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.termsLinks}>
                  <FooterLinks
                    links={footerData?.footerLinks}
                    fallback={'Wait! just Loading...'}
                  />
                </div>
                <div className={styles.socials}>
                  <FooterSocials socials={footerData?.socials} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <FooterInfo
              info={footerData?.info}
              fallback={'Wait! just Loading...'}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
