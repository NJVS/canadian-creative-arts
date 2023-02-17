import styles from './FormGroup.module.scss';

const FormGroup = ({ type, placeholder, name, invalid, value, setFormData }) => {

  function onChangeHandler(event) {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  function dateBlur(event) {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }))
    event.target.type = 'text'
  }

  return (
    <div className={`${styles.container} ${invalid ? styles.error : ''}`}>
      {type == 'date' ? (
        <input type='text' placeholder={placeholder} name={name}
          onFocus={(event) => event.target.type = 'date'}
          onBlur={dateBlur}
          onChange={onChangeHandler}
          value={value}
        />
      ) : (
        <input type={type} placeholder={placeholder} name={name}
          onChange={onChangeHandler}
          value={value}
        />
      )}
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