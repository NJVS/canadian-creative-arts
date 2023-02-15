import { useState } from 'react';
import CustomSelect from '../../components/CustomSelect/CustomSelect';
import { upcomingFairs, levelOfStudy, typeOfStudies, courses, dialCode } from '../../data/selectOptions';
import global from '../../assets/styles/globalstyles.module.scss';
import styles from './MultiStepForm.module.scss';
import MultipleSelect from '../../components/MultipleSelect/MultipleSelect';


const MultiStepForm = () => {
  const [formStep, setFormStep] = useState(2);

  return (
    <section className={styles.container}>
      <ul className={styles.tabs}>
        <li className={(formStep === 1) ? styles.tab_active : ''}>Step 1</li>
        <li className={(formStep === 2) ? styles.tab_active : ''}>Step 2</li>
      </ul>
      <ul className={styles.forms}>
        <li className={(formStep === 1) ? styles.form_active : ''}>
          <h3>About you</h3>
          <form className={global.form_container}>
            <div>
              <CustomSelect options={upcomingFairs} name='upcoming_fairs' placeholder="Which fair are you going to?" />
              <div className={global.input_group}>
                <input type="text" placeholder='Firt name' />
                <input type="text" placeholder='Last name' />
              </div>
              <input type="email" placeholder='Email' />
              <input type="email" placeholder='Confirm Email' />
              <input type="text" placeholder='Date of Birth'
                onFocus={e => e.target.type = 'date'}
                onBlur={e => e.target.type = 'text'}
              />
              <div className={global.input_group}>
                <CustomSelect options={dialCode} name='dial_code' defaultValueId='AE+971' icon={false} />
                <input type="number" placeholder='Mobile' />
              </div>
              <CustomSelect options={levelOfStudy} name='current_level' placeholder='What is your current level of study' />
              <CustomSelect options={typeOfStudies} name='planning_study' placeholder='What are you planning to study' />
            </div>
            <button type='button' className={global.btn} onClick={() => setFormStep(2)} >Next</button>
          </form>
        </li>
        <li className={(formStep === 2) ? styles.form_active : ''}>
          <h3>Select your interest:</h3>
          <form className={global.form_container}>
            <div>
              <div className={global.form_group}>
                <label htmlFor="">What course are you interested in?</label>
                <MultipleSelect options={courses} name='interested_courses' />
              </div>
              <div className={global.form_group}>
                <label htmlFor="">What countries are you interested in?</label>
                <MultipleSelect options={courses} name='interested_countries' />
              </div>
              <div className={global.form_group}>
                <label htmlFor="">What areas are you interested in?</label>
                <MultipleSelect options={courses} name='interested_areas' />
              </div>
            </div>
            <div>
              <button type='button' className={global.btn} onClick={() => setFormStep(2)}>Previous</button>
              <button className={global.btn}>Submit</button>
            </div>
          </form>
        </li>
      </ul>
    </section>
  )
}

export default MultiStepForm