import { useState, useEffect } from 'react';
import CustomSelect from '../../components/CustomSelect/CustomSelect';
import MultipleSelect from '../../components/MultipleSelect/MultipleSelect';
import FormGroup from '../../components/FormGroup/FormGroup';
import { upcomingFairs, levelOfStudy, typeOfStudies, courses, dialCode } from '../../data/selectOptions';
import { validateForm } from '../../utils/validateForm';
import global from '../../assets/styles/globalstyles.module.scss';
import styles from './MultiStepForm.module.scss';


const MultiStepForm = () => {
  const [formStep, setFormStep] = useState(2);
  const [invalidInputs, setInvalidInputs] = useState([]);
  // const [firstFormVal, setFirstFormVal] = useState({});
  // const [secondFormval, setSecondFormVal] = useState({});
  function nextStepHandler(event) {
    event.preventDefault();

    // validation 
    validateForm(new FormData(event.target))
      .then(data => {
        setInvalidInputs([]);
        setFormStep(2);
      })
      .catch(data => {
        console.log('rejected');
        console.log(data);
        setInvalidInputs(data);
      });
  }

  function checkForError(name) {
    if (invalidInputs.findIndex(item => item.name === name) < 0) {
      return false;
    } else {
      const item = invalidInputs.find(item => item.name === name);
      return item.msg;
    }
  }

  return (
    <section className={styles.container}>
      <ul className={styles.tabs}>
        <li className={(formStep === 1) ? styles.tab_active : ''}>Step 1</li>
        <li className={(formStep === 2) ? styles.tab_active : ''}>Step 2</li>
      </ul>
      <ul className={styles.forms}>
        <li className={(formStep === 1) ? styles.form_active : ''}>
          <h3>About you</h3>
          <form onSubmit={nextStepHandler}>
            <div>
              <CustomSelect options={upcomingFairs} name='upcoming_fairs' placeholder="Which fair are you going to?"
                invalid={checkForError('upcoming_fairs')}
              />
              <div className={styles.input_group}>
                <FormGroup type='text' placeholder='Firt name' name='first_name'
                  invalid={checkForError('first_name')} />
                <FormGroup type='text' placeholder='Last name' name='last_name'
                  invalid={checkForError('last_name')} />
              </div>
              <FormGroup type='text' placeholder='Email' name='email'
                invalid={checkForError('email')} />
              <FormGroup type='text' placeholder='Confirm Email' name='email_confirm'
                invalid={checkForError('email_confirm')} />
              <FormGroup type='text' placeholder='Date of Birth' name='birth_date'
                onFocus={e => e.target.type = 'date'}
                onBlur={e => e.target.type = 'text'}
                invalid={checkForError('birth_date')} />
              <div className={styles.input_group}>
                <CustomSelect options={dialCode} name='dial_code' 
                  placeholder='Select dial code' 
                  icon={false} 
                  invalid={checkForError('dial_code')}
                />
                <FormGroup type='number' placeholder='Mobile' name='phone_number'
                  invalid={checkForError('phone_number')} />
                {/* <input type="number" placeholder='Mobile' name='phone_number' /> */}
              </div>
              <CustomSelect options={levelOfStudy} name='current_level' 
                placeholder='What is your current level of study' 
                invalid={checkForError('current_level')}  
              />
              <CustomSelect options={typeOfStudies} name='planning_study' 
                placeholder='What are you planning to study' 
                invalid={checkForError('planning_study')}
              />
            </div>
            <button type='submit' className={global.btn} >Next</button>
          </form>
        </li>
        <li className={(formStep === 2) ? styles.form_active : ''}>
          <h3>Select your interest:</h3>
          <form>
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
              <button type='button' className={global.btn} onClick={() => setFormStep(1)}>Previous</button>
              <button className={global.btn}>Submit</button>
            </div>
          </form>
        </li>
      </ul>
    </section>
  )
}

export default MultiStepForm