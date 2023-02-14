import { useState } from 'react';

import InputSelect from './InputSelect';

import { upcomingFairs, levelOfStudy, courses, dialCode } from '../../data/selectOptions';

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
              <InputSelect options={upcomingFairs} placeholder="Which fair are you going to?" />
              <div className={styles.input_group}>
                <input type="text" placeholder='Firt name' />
                <input type="text" placeholder='Last name' />
              </div>
              <input type="email" placeholder='Email' />
              <input type="email" placeholder='Confirm Email' />
              <input type="text" placeholder='Date of Birth' 
                onFocus={e => e.target.type = 'date' } 
                onBlur={e => e.target.type = 'text'}
              />
              <div className={styles.input_group}>
                <InputSelect options={dialCode} defaultValueId='AE+971' icon={false} />
                <input type="number" placeholder='Mobile' />
              </div>
              <InputSelect options={levelOfStudy} placeholder='What is your current level of study' />
              <InputSelect options={courses} placeholder='What are you planning to study' />
            </div>
            <button type='button' className={global.btn} onClick={() => setStep(2)} >Next</button>
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
              <button type='button' className={global.btn} onClick={() => setStep(1)}>Previous</button>
              <button className={global.btn}>Submit</button>
            </div>
          </form>
        </li>
      </ul>
    </section>
  )
}

export default SignupForm