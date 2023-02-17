import { useState } from 'react';
import styles from './CustomSelect.module.scss';
import { ReactComponent as ArrowIcon } from '../../assets/icons/chevron-down-solid.svg';

const CustomSelect = ({ options, placeholder, name, icon, invalid, value, setFormData }) => {
  const [isToggled, setIsToggled] = useState(false);

  function changeHandler(value) {
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  return (
    <div className={`${styles.container} ${invalid ? styles.error : ''}`}>
      <button
        type="button"
        className={`
          ${styles.toggler} 
          ${(value !== '') ? styles.selected : ''}
          ${isToggled ? styles.toggled : ''}
        `}
        onClick={() => setIsToggled(!isToggled)}
        onBlur={() => setTimeout(() => setIsToggled(false), 100)}
      >
        {(value === '') ? placeholder : value}
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
                  onChange={e => (e.target.checked) && changeHandler(option.name)}
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