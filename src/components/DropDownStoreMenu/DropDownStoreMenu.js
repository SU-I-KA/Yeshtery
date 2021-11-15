import React, { Component } from 'react'
import styles from './DropDownStoreMenu.module.scss'

class DropDownStoreMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      branch: 'choose Branch',
      open: false,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.optionsList !== prevProps.optionsList) {
      this.setState({
        branch: 'choose Branch',
      })
    }
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  onChangeBranch = (event) => {
    const value = event.target.value
    this.setState({
      branch: value,
      open: false,
    })
  }

  render() {
    const { branch } = this.state
    const { optionsList, name } = this.props
    console.log(optionsList)
    return (
      <div
        className={`${styles.selectWrap} ${
          this.state.open ? styles.active : null
        }`}
      >
        <ul className={styles.defaultOption} onClick={this.handleToggle}>
          <li>
            <div className={styles.option}>
              <input type='radio' name={name} value={branch} />
              <span>{branch}</span>
            </div>
          </li>
        </ul>

        <ul className={styles.selectUl}>
          {optionsList?.map?.((item, index) => {
            return (
              <li key={index}>
                <label className={styles.option}>
                  <input
                    type='radio'
                    name={name}
                    value={item}
                    onClick={(e) => this.onChangeBranch(e)}
                  />
                  <span>{item}</span>
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default DropDownStoreMenu
