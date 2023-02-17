import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FormDataContext } from '../../../context/FormDataContext';

import styles from './Forms.module.scss';
import FirstStep from './Steps/FirstStep';
import SecondStep from './Steps/SecondStep';

const Forms = () => {
  const [formStep, setFormStep] = useState(1);
  
  const [form1Data, setForm1Data] = useState({
    first_name: '',
    last_name: '',
    event_name: '',
    email: '',
    email_confirm: '',
    birth_date: '',
    dial_code: '',
    phone_number: '',
    current_level: '',
    planning_study: '',
  });

  const [form2Data, setForm2Data] = useState({
    interested_courses: [],
    interested_countries: [],
    interested_areas: []
  });

  return (
    <section className={styles.container}>
      <ul className={styles.step_tabs}>
        <li className={(formStep === 1) ? styles.current_step : ''}>Step 1</li>
        <li className={(formStep === 2) ? styles.current_step : ''}>Step 2</li>
      </ul>
      <div className={styles.step_forms}>
        {formStep === 1 ? (
          <FirstStep setFormStep={setFormStep} formData={form1Data} setFormData={setForm1Data} />
        ) : (
          <SecondStep setFormStep={setFormStep} formData={form2Data} setFormData={setForm2Data} previousData={form1Data} />
        )}
      </div>
    </section>
  )
}

export default Forms