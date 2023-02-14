import { useState } from 'react';

import styles from './InputCheckbox.module.scss';

const testData = [
  { id: 'KSFT0038', value: 'test 1' },
  { id: 'UGDJ8475', value: 'test 2' },
  { id: 'LSHN2994', value: 'test 3' },
  { id: 'BHFH3561', value: 'test 4' },
  { id: 'KKGR4379', value: 'test 5' },
  { id: 'LLSG0019', value: 'test 6' },
  { id: 'NNGS4431', value: 'test 7' }
]

const InputCheckbox = ({ options, placeholder, name }) => {
  const [values, setValues] = useState([]);
  const [toggled, setToggled] = useState(false);

  function deleteValue(id) {
    setValues(values.filter(data => data.id !== id));
  }

  function addValue(option) {
    setValues(prev => [...prev, {id: option.id, value: option.name}]);
  }

  function isActive(id) {
    return (values.findIndex(val => val.id === id) >= 0)
  }

  function toggleOptionsHandler(event) {
    if (event.target.tagName !== 'UL') return;
    // console.log(1)
    setToggled(!toggled);
  }

  return (
    <div className={styles.container} tabIndex='0' onBlur={(e) => setToggled(false)}>
      <ul className={styles.toggler} onClick={toggleOptionsHandler}>
        {(values.length === 0) ?
          (
            <li className={styles.toggler_placeholder}>{placeholder}</li>
          ) :
          (
            values.map(data => (
              <li key={data.id} className={styles.selected_item}>
                <button onClick={() => deleteValue(data.id)}>x</button>
                <span>{data.value}</span>
              </li>
            ))
          )}
      </ul>
      <div className={`${styles.options} ${toggled ? styles.active : ''}`}>
        {options.map(option => (
          <label
            key={`label_${option.id}`}
            htmlFor={`inp_${option.id}`}
            className={(isActive(option.id)) ? styles.active : ''}
          >
            {option.name}

            <input
              type="checkbox"
              name={name}
              id={`inp_${option.id}`}
              onChange={event => (event.target.checked) ? addValue(option) : deleteValue(option.id)}
              checked={isActive(option.id)}
            />
          </label>
        ))}
      </div>
    </div>
  )
}

InputCheckbox.defaultProps = {
  placeholder: 'You can select multiple options'
}

export default InputCheckbox