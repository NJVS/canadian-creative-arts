import { useState, useEffect } from 'react';
import styles from './CustomSelect.module.scss';
import { ReactComponent as ArrowIcon } from '../../assets/icons/chevron-down-solid.svg';

const CustomSelect = ({ options, placeholder, defaultValueId, icon, name }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isToggled, setIsToggled] = useState(false);
  
  useEffect(() =>{
    if (defaultValueId) {
      const option = options.find(option => option.id === defaultValueId);
      setSelectedOption(option.name);
    }
  }, [])

  return (
    <div className={styles.container}>
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

      <div className={`${styles.options} ${isToggled ? styles.active : ''}`}>
        {options.length === 0 ? (<p>No options available!</p>) : (
          options.map(option => (
            <label 
              key={option.id} 
              htmlFor={`${name}_${option.id}`}
            >
              {option.name}
              <input type='radio' name={name} id={`${name}_${option.id}`} 
                onChange={e => (e.target.checked) && setSelectedOption(option.name)}
              />
            </label>
          ))
        )}
      </div>
    </div>
  )
}

CustomSelect.defaultProps = {
  options: [],
  placeholder: 'Click me to select...',
  defaultValueId: false,
  icon: true,
}

export default CustomSelect