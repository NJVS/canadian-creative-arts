import { useState } from 'react';

import global from '../../assets/styles/globalstyles.module.scss';
import styles from './SignupForm.module.scss';

const SignupForm = () => {
  const [step, setStep] = useState(1);

  return (
    <section className={styles.form_container}>
      <ul className={styles.steps_tab}>
        <li className={(step === 1) ? styles.tab_active : ''}>Step 1</li>
        <li className={(step === 2) ? styles.tab_active : ''}>Step 2</li>
      </ul>
      <ul className={styles.steps_form}>
        <li className={(step === 1) ? styles.form_active : ''}>
          <h3>About you</h3>
          <form className={styles.form}>
            <div>
              <input type="text" placeholder='Which fair are you going to?' />
              <div className={styles.input_group}>
                <input type="text" placeholder='Firt name' />
                <input type="text" placeholder='Last name' />
              </div>
              <input type="email" placeholder='Email' />
              <input type="email" placeholder='Confirm Email' />
              <input type="email" placeholder='Date of Birth' />
              <div className={styles.input_group}>
                <input type="text" placeholder='+971 - United Arab Emirates' />
                <input type="text" placeholder='Mobile' />
              </div>
              <input type="text" placeholder='What is your current level of study' />
              <input type="text" placeholder='What are you planning to study' />
            </div>
            <button type='button' className={global.btn}>Next</button>
          </form>
        </li>
        <li className={(step === 2) ? styles.form_active : ''}>
          <h3>Select your interest:</h3>
          <form className={styles.form}>
            <div>
              <div className={styles.form_group}>
                <label htmlFor="#courses">What course are you interested in?</label>
                <input type="text" id='courses' placeholder='You can select multiple options' />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="#countries">What countries are you interested in?</label>
                <input type="text" id='countries' placeholder='You can select multiple options' />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="#areas">What areas are you interested in?</label>
                <input type="text" id='areas' placeholder='You can select multiple options' />
              </div>
            </div>
            <div>
              <button className={global.btn}>Previous</button>
              <button className={global.btn}>Submit</button>
            </div>
          </form>
        </li>
      </ul>
    </section>
  )
}

export default SignupForm