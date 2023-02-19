import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { FormDataContext } from '../../context/FormDataContext';
import global from '../../assets/styles/globalstyles.module.scss';
import styles from './Signup.module.scss';
import { ReactComponent as HeroBorder } from '../../assets/illustrations/hero-border-1.svg';

const Signup = () => {
  const { registrationStatus } = useContext(FormDataContext);
  console.log(registrationStatus)

  return (
    <>
      <section className={styles.hero_section}>
        <div className={global.container}>
          <h1>{registrationStatus ? 'Thank you' : 'Registration'}</h1>
        </div>
        <HeroBorder />
      </section>
      <Outlet />
    </>

    // <main className={styles.container}>
    //   <div className={global.container}>
    //     <section className={styles.hero}>
    //       <h1>{registrationStatus ? 'Thank you' : 'Registration'}</h1>
    //     </section>
    //     <Outlet />
    //   </div>
    // </main>
  )
}

export default Signup