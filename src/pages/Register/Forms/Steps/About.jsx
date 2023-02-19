import { useState, useContext } from 'react';
import { FormDataContext } from '../../../../context/FormDataContext';

import CustomSelect from '../../../../components/CustomSelect/CustomSelect';
import FormGroup from '../../../../components/FormGroup/FormGroup';

import global from '../../../../assets/styles/globalstyles.module.scss';
import styles from '../Forms.module.scss';

import { upcomingFairs, levelOfStudy, typeOfStudies, dialCode } from '../../../../data/selectOptions';
import { validateForm } from '../../../../utils/validateForm';

const About = ({ setFormStep }) => {
  const { aboutData, setAboutData } = useContext(FormDataContext);
  const [invalidInputs, setInvalidInputs] = useState({});

  function submitHandler(e) {
    e.preventDefault();

    validateForm(aboutData)
      .then(data => {
        console.log('no invalid inputs')
        setFormStep(2);
      })
      .catch(data => {
        console.log('invalid inputs found')
        setInvalidInputs(data);
      })
  }

  return (
    <form onSubmit={submitHandler}>
      <h3>About you</h3>
      <div>
        <CustomSelect options={upcomingFairs} name='event_name' placeholder="Which fair are you going to?"
          invalid={invalidInputs['event_name']}
          value={aboutData['event_name']} setFormData={setAboutData} />
        <div className={styles.input_group}>
          <FormGroup type='text' placeholder='Firt name' name='first_name'
            invalid={invalidInputs['first_name']}
            value={aboutData['first_name']} setFormData={setAboutData} />
          <FormGroup type='text' placeholder='Last name' name='last_name'
            invalid={invalidInputs['last_name']}
            value={aboutData['last_name']} setFormData={setAboutData} />
        </div>
        <FormGroup type='text' placeholder='Email' name='email'
          invalid={invalidInputs['email']}
          value={aboutData['email']} setFormData={setAboutData} />
        <FormGroup type='text' placeholder='Confirm Email' name='email_confirm'
          invalid={invalidInputs['email_confirm']}
          value={aboutData['email_confirm']} setFormData={setAboutData} />
        <FormGroup type='date' placeholder='Date of Birth' name='birth_date'
          invalid={invalidInputs['birth_date']}
          value={aboutData['birth_date']} setFormData={setAboutData} />
        <div className={styles.input_group}>
          <CustomSelect options={dialCode} name='dial_code' placeholder='Select dial code' icon={false}
            invalid={invalidInputs['dial_code']}
            value={aboutData['dial_code']} setFormData={setAboutData} />
          <FormGroup type='number' placeholder='Mobile' name='phone_number'
            invalid={invalidInputs['phone_number']}
            value={aboutData['phone_number']} setFormData={setAboutData} />
        </div>
        <CustomSelect options={levelOfStudy} name='current_level'
          placeholder='What is your current level of study'
          invalid={invalidInputs['current_level']}
          value={aboutData['current_level']} setFormData={setAboutData} />
        <CustomSelect options={typeOfStudies} name='planning_study'
          placeholder='What are you planning to study'
          invalid={invalidInputs['planning_study']}
          value={aboutData['planning_study']} setFormData={setAboutData} />
      </div>
      <button type='submit' className={global.btn}>Next</button>
    </form>
  )
}

export default About