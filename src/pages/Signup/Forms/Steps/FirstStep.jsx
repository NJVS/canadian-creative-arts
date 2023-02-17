import { useState } from 'react';

import CustomSelect from '../../../../components/CustomSelect/CustomSelect';
import FormGroup from '../../../../components/FormGroup/FormGroup';

import global from '../../../../assets/styles/globalstyles.module.scss';
import styles from '../Forms.module.scss';

import { upcomingFairs, levelOfStudy, typeOfStudies, dialCode } from '../../../../data/selectOptions';
import { validateForm } from '../../../../utils/validateForm';

const FirstStep = ({ setFormStep, formData, setFormData }) => {
  const [invalidInputs, setInvalidInputs] = useState({});

  function submitHandler(e) {
    e.preventDefault();

    validateForm(formData)
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
          value={formData['event_name']} setFormData={setFormData} />
        <div className={styles.input_group}>
          <FormGroup type='text' placeholder='Firt name' name='first_name'
            invalid={invalidInputs['first_name']}
            value={formData['first_name']} setFormData={setFormData} />
          <FormGroup type='text' placeholder='Last name' name='last_name'
            invalid={invalidInputs['last_name']}
            value={formData['last_name']} setFormData={setFormData} />
        </div>
        <FormGroup type='text' placeholder='Email' name='email'
          invalid={invalidInputs['email']}
          value={formData['email']} setFormData={setFormData} />
        <FormGroup type='text' placeholder='Confirm Email' name='email_confirm'
          invalid={invalidInputs['email_confirm']}
          value={formData['email_confirm']} setFormData={setFormData} />
        <FormGroup type='date' placeholder='Date of Birth' name='birth_date'
          invalid={invalidInputs['birth_date']}
          value={formData['birth_date']} setFormData={setFormData} />
        <div className={styles.input_group}>
          <CustomSelect options={dialCode} name='dial_code' placeholder='Select dial code' icon={false}
            invalid={invalidInputs['dial_code']}
            value={formData['dial_code']} setFormData={setFormData} />
          <FormGroup type='number' placeholder='Mobile' name='phone_number'
            invalid={invalidInputs['phone_number']}
            value={formData['phone_number']} setFormData={setFormData} />
        </div>
        <CustomSelect options={levelOfStudy} name='current_level'
          placeholder='What is your current level of study'
          invalid={invalidInputs['current_level']}
          value={formData['current_level']} setFormData={setFormData} />
        <CustomSelect options={typeOfStudies} name='planning_study'
          placeholder='What are you planning to study'
          invalid={invalidInputs['planning_study']}
          value={formData['planning_study']} setFormData={setFormData} />
      </div>
      <button type='submit' className={global.btn}>Next</button>
    </form>
  )
}

export default FirstStep