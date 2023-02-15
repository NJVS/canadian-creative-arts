import { useState, useEffect } from 'react';
import styles from './CustomSelect.module.scss';
import { ReactComponent as ArrowIcon } from '../../assets/icons/chevron-down-solid.svg';

const CustomSelect = ({ options, placeholder, name, icon, invalid }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isToggled, setIsToggled] = useState(false);

  function isSelected(id) {
    return selectedOption.findIndex(selectedOption => selectedOption.id === id) >= 0
  }

  return (
    <div className={`${styles.container} ${invalid ? styles.error : ''}`}>
      <button
        type="button"
        className={`
          ${styles.toggler} 
          ${(selectedOption !== null) ? styles.selected : ''}
          ${isToggled ? styles.toggled : ''}
        `}
        onClick={() => setIsToggled(!isToggled)}
        onBlur={() => setTimeout(() => setIsToggled(false), 100)}
      >
        {(selectedOption === null) ? placeholder : selectedOption}
        {icon && <ArrowIcon />}
      </button>

      {invalid && (<p className={styles.error_message}>{invalid}</p>)}

      <div className={`${styles.options} ${isToggled ? styles.active : ''}`}>
        {options.length === 0 ? (<p>No options available!</p>) : (
          <>
            <input className={styles.input_default_value} type="radio" name={name} value='' defaultChecked />
            {options.map(option => (
              <label
                key={option.id}
                htmlFor={`${name}_${option.id}`}
              >
                {option.name}
                <input type='radio' name={name} id={`${name}_${option.id}`} value={option.name}
                  onChange={e => (e.target.checked) && setSelectedOption(option.name)}
                />
              </label>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

CustomSelect.defaultProps = {
  options: [],
  placeholder: 'Click me to select...',
  defaultValueId: false,
  invalid: false,
  icon: true,
}

export default CustomSelect