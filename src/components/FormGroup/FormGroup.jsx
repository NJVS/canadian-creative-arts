import { useState, useEffect } from 'react';
import styles from './FormGroup.module.scss';

const FormGroup = ({ type, placeholder, name, invalid, onFocus, onBlur }) => {

  return (
    <div className={`${styles.container} ${invalid ? styles.error : ''}`}>
      <input type={type} placeholder={placeholder} name={name}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {invalid && (<p className={styles.error_message}>{invalid}</p>)}
    </div>
  )
}

FormGroup.defaultProps = {
  type: 'text',
  placeholder: '',
  invalid: false
}

export default FormGroup