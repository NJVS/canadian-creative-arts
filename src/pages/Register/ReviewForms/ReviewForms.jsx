import { useContext } from 'react'
import { FormDataContext } from '../../../context/FormDataContext';
import { useNavigate } from 'react-router-dom'

import global from '../../../assets/styles/globalstyles.module.scss';
import styles from './ReviewForms.module.scss';

const ReviewForms = () => {
  const { aboutData, interestsData, submitApplication } = useContext(FormDataContext);
  const navigate = useNavigate();


  // calc age
  function getAge() {
    const month_diff = Date.now() - new Date(aboutData.birth_date).getTime();
    const age = Math.abs(new Date(month_diff).getUTCFullYear() - 1970);

    return age
  }

  function getPhoneNumber() {
    let code = aboutData.dial_code;
    code = code.split(' ')[0];

    return `${code} ${aboutData.phone_number}`;
  }

  function click() {
    navigate(-1)
  }

  return (
    <div className={`${styles.container} ${global.container}`}>
      <h2>{aboutData.event_name}</h2>
      <section>
        <div className={styles.info}>
          <p>Full Name</p>
          <h4>{aboutData.first_name} {aboutData.last_name}</h4>
        </div>
        <div className={styles.info_group}>
          <div className={styles.info}>
            <p>Age</p>
            <h4>{getAge()}</h4>
          </div>
          <div className={styles.info}>
            <p>Phone number</p>
            <h4>{getPhoneNumber()}</h4>
          </div>
        </div>
        <div className={styles.info}>
          <p>Email</p>
          <h4>{aboutData.email}</h4>
        </div>
        <div className={styles.info}>
          <p>Degree of study</p>
          <h4>{aboutData.current_level}</h4>
        </div>
      </section>
      <button className={global.btn} onClick={submitApplication}>Submit your application</button>
    </div>
  )
}

export default ReviewForms