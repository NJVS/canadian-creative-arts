import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormDataContext } from '../../../../context/FormDataContext';

import MultipleSelect from '../../../../components/MultipleSelect/MultipleSelect';
import global from '../../../../assets/styles/globalstyles.module.scss';
import styles from '../Forms.module.scss';

import { courses, typeOfStudies, countries } from '../../../../data/selectOptions';
import { validateForm } from '../../../../utils/validateForm';

const SecondStep = ({ setFormStep, formData, setFormData, previousData }) => {
  const { registrationComplete } = useContext(FormDataContext);
  const [invalidInputs, setInvalidInputs] = useState({});
  const submitNavigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();

    validateForm(formData).then(() => {
      setInvalidInputs([]);

      const allData = {...previousData, ...formData};
      registrationComplete(allData);

      submitNavigate('/signup/complete');

      console.log('Form 2: no invalid input')
    }).catch(data => {
      console.log('Form 2: invalid inputs found')
      setInvalidInputs(data);
    })
  }

  return (
    <form onSubmit={submitHandler}>
      <h3>Select your interest</h3>
      <div>
        <div className={styles.form_group}>
          <label htmlFor="">What course are you interested in?</label>
          <MultipleSelect options={courses} name='interested_courses'
            invalid={invalidInputs['interested_courses']} setFormData={setFormData} />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="">What countries are you interested in?</label>
          <MultipleSelect options={countries} name='interested_countries'
            invalid={invalidInputs['interested_countries']} setFormData={setFormData} />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="">What areas are you interested in?</label>
          <MultipleSelect options={typeOfStudies} name='interested_areas'
            invalid={invalidInputs['interested_areas']} setFormData={setFormData} />
        </div>
      </div>
      <div className={styles.links}>
        <button type='button' className={global.btn} onClick={() => setFormStep(1)}>Previous</button>
        <button type='submit' className={global.btn}>Submit</button>
      </div>
    </form>
  )
}

export default SecondStep