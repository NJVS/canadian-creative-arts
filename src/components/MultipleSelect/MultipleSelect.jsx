import { useState, useEffect, useRef } from 'react'
import styles from './MultipleSelect.module.scss';

const temp = [
  { id: 'KSFT0038', value: 'test 1' },
  { id: 'UGDJ8475', value: 'test 2' },
]

const MultipleSelect = ({ options, placeholder, name }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isToggled, setIsToggled] = useState(false);
  const containerRef = useRef(null)

  function deleteOption(id) {
    setSelectedOptions(selectedOptions.filter(data => data.id !== id));
    setIsToggled(false)
  }

  function addOption(option) {
    setSelectedOptions(prev => [...prev, { id: option.id, value: option.name }]);
    setIsToggled(false)
  }

  function isSelected(id) {
    return selectedOptions.findIndex(selectedOption => selectedOption.id === id) >= 0
  }

  return (
    <div ref={containerRef} className={styles.container}
    // onBlur={(e) => setIsToggled(false)}
    >
      <ul className={styles.toggler} onClick={e => (e.target.tagName !== "BUTTON") && setIsToggled(!isToggled)}>
        {selectedOptions.length == 0 ? (<li className={styles.placeholder}>{placeholder}</li>) : (
          selectedOptions.map(option => (
            <li key={option.id} className={styles.selected}>
              <button type='button' onClick={() => deleteOption(option.id)}>x</button>
              <span>{option.value}</span>
            </li>
          ))
        )}
      </ul>
      <div className={`${styles.options} ${isToggled ? styles.active : ''}`}>
        {options.length === 0 ? (<p>No options available!</p>) : (
          options.map(option => (
            <label
              key={option.id}
              htmlFor={`${name}_${option.id}`}
              className={isSelected(option.id) ? styles.active : ''}
            >
              {option.name}
              <input type='checkbox' name={name} id={`${name}_${option.id}`} value={option.name}
                onChange={e => (e.target.checked) ? addOption(option) : deleteOption(option.id)}
                checked={isSelected(option.id)}
              />
            </label>
          ))
        )}
      </div>
    </div>
  )
}

MultipleSelect.defaultProps = {
  options: [],
  placeholder: 'You can select multiple options',
}

export default MultipleSelect