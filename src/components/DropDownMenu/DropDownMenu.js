import React, { Component } from 'react'
import styles from './DropDownMenu.module.scss'

class DropDownMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: this.props.defaultOption,
      open: false,
    }
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    this.setState(
      {
        category: value,
        open: false,
      },
      () => this.props.filterItems(name, value)
    )
  }
  render() {
    const { category } = this.state
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
              <input type='radio' name={name} />
              <span>{category && category}</span>
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
                    onClick={(e) => this.handleChange(e)}
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

export default DropDownMenu
