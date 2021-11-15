import React from 'react'
import styles from './SectionHeader.module.scss'
import Title from '../Title/Title'
import ViewAllBtn from '../ViewAllBtn/ViewAllBtn'
import DropDownMenu from '../DropDownMenu/DropDownMenu'

export default function SectionHeader({
  title,
  text,
  defaultOption,
  filterItems,
  optionsList,
  name,
  url,
}) {
  console.log(name)
  return (
    <div className={styles.row}>
      <Title title={title} text={text} />
      <div className={styles.rightButtons}>
        {optionsList && (
          <DropDownMenu
            defaultOption={defaultOption}
            filterItems={filterItems}
            optionsList={optionsList}
            name={name}
          />
        )}
        <ViewAllBtn url={url} />
      </div>
    </div>
  )
}
