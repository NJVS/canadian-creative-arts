import { Outlet } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { FormDataContext } from '../../context/FormDataContext';
import global from '../../assets/styles/globalstyles.module.scss';
import styles from './Register.module.scss';
import { ReactComponent as HeroBorder } from '../../assets/illustrations/hero-border-1.svg';

const Register = () => {
  const { status, resetRegistration } = useContext(FormDataContext);

  useEffect(() => {
    if (status === 'SUBMITED') {
      resetRegistration();
    }
  }, []);

  return (
    <>
      <section className={styles.hero_section}>
        <div className={global.container}>
          <h1>{(status == 'SUBMITED') ? 'Thankyou' : (status === 'TO_REVIEW') ? 'Review' : 'Registration'}</h1>
        </div>
        <HeroBorder />
      </section>
      <Outlet />
    </>
  )
};

export default Register;