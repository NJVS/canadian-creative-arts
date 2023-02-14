import { useState, useEffect } from 'react';

import styles from './InputSelect.module.scss';
import { ReactComponent as ArrowIcon } from '../../assets/icons/chevron-down-solid.svg';

const InputSelect = ({ options, placeholder, defaultValueId, icon }) => {
  const [value, setValue] = useState(null);
  const [toggled, setToggled] = useState(false);

  useEffect(() =>{
    if (defaultValueId) {
      const option = options.find(option => option.id === defaultValueId);
      setValue(option.name);
    }
  }, [])

  function selectHandler(id) {
    const option = options.find(option => option.id === id);
    setValue(option.name);
    setToggled(false);
  }

  return (
    <div className={styles.input_select}>
      <button 
        type='button'
        className={`
          ${styles.toggler} 
          ${(value !== null) ? styles.selected : ''}
          ${toggled ? styles.toggled : ''}
        `}
        onClick={() => setToggled(!toggled)}
      >
        {(value === null) ? placeholder : value}
        {icon && <ArrowIcon />}
      </button>
      <div className={`${styles.options} ${toggled ? styles.active : ''}`}>
        {options.map(option => (
          <label 
            key={`label_${option.id}`} 
            htmlFor={`inp_${option.id}`}
            onClick={() => selectHandler(option.id)}
          >
            {option.name}
          </label>
        ))}
      </div>
    </div>
  )
}

InputSelect.defaultProps = {
  defaultValueId: false,
  icon: true,
}

export default InputSelect