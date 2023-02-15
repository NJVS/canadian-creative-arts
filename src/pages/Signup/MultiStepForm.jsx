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

  // test for form 2
  const [inp1, setInp1] = useState(null)
  const [inp2, setInp2] = useState(null)
  const [inp3, setInp3] = useState(null)

  
  function nextStepHandler(event) {
    event.preventDefault();

    // validation 
    validateForm(new FormData(event.target))
      .then(data => {
        setInvalidInputs([]);
        setFormStep(2);
        for (const [name, value] of data) {
          console.log({[name]: value});
        }
      })
      .catch(data => {
        console.log('rejected');
        console.log(data);
        setInvalidInputs(data);
      });
  }

  function submitHandler(event) {
    event.preventDefault();
    // console.log([inp1, inp2, inp3]);
    const data = new FormData();
    data.set(inp1[0], inp1[1]);
    data.set(inp2[0], inp2[1]);
    data.set(inp3[0], inp3[1]);
    validateForm(data)
      .then(data => {
        for (const [name, value] of data) {
          console.log(name, value);
        }
      })
      .catch(data => {
        console.log('rejected', data)
      })
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
          <form onSubmit={submitHandler}>
            <div>
              <div className={global.form_group}>
                <label htmlFor="">What course are you interested in?</label>
                <MultipleSelect options={courses} name='interested_courses' setFormData={setInp1} />
              </div>
              <div className={global.form_group}>
                <label htmlFor="">What countries are you interested in?</label>
                <MultipleSelect options={courses} name='interested_countries' setFormData={setInp2} />
              </div>
              <div className={global.form_group}>
                <label htmlFor="">What areas are you interested in?</label>
                <MultipleSelect options={courses} name='interested_areas' setFormData={setInp3} />
              </div>
            </div>
            <div>
              <button type='button' className={global.btn} onClick={() => setFormStep(1)}>Previous</button>
              <button type='submit' className={global.btn}>Submit</button>
            </div>
          </form>
        </li>
      </ul>
    </section>
  )
}

export default MultiStepForm