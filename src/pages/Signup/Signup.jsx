import global from '../../assets/styles/globalstyles.module.scss';
import MultiStepForm from './MultiStepForm';
// import SignupForm from '../../components/SignupForm/SignupForm';
import styles from './Signup.module.scss';

const Signup = () => {
  return (
    <main className={styles.container}>
      <div className={global.container}>
        <section className={styles.hero}>
          <h1>Registration</h1>
        </section>
        {/* <SignupForm /> */}
        <MultiStepForm />
      </div>
    </main>
  )
}

export default Signup