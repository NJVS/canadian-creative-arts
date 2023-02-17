import { useContext } from 'react';
import { FormDataContext } from '../../context/FormDataContext';
import global from '../../assets/styles/globalstyles.module.scss';
import styles from './SignupComplete.module.scss';
import { ReactComponent as CheckIcon } from '../../assets/icons/circle-check-regular.svg';
import { Link } from 'react-router-dom';

const SignupComplete = () => {
  const { formData } = useContext(FormDataContext);
  const { first_name, last_name, event_name } = formData;
  return (
    <section className={styles.container}>
      <CheckIcon />
      <h2>Hi <span>{first_name} {last_name}</span>,</h2>
      <p>
        You have successfully registered. Details and intructions
        for <strong>{event_name}</strong> have been sent to your email address.
      </p>
      <Link to='/' className={global.btn}>Browse other events</Link>
    </section>
  )
}

export default SignupComplete