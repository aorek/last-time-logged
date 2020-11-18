import React from 'react'

import styles from './inputFormGroup.module.css'

const InputFormGroup = ({ type, labelValue, value, onChange }) => {
  const handleChange = e => {
    onChange(e.target.value)
  }

  return (
    <div className={styles['form-group']}>
      <input
        type={type}
        value={value}
        onChange={handleChange}
      />
      <label className={value && styles['input-has-value']}>{labelValue}</label>
    </div>
  )
}

export default InputFormGroup
