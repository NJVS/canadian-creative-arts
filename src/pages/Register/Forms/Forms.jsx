import { useState } from 'react'

import global from '../../../assets/styles/globalstyles.module.scss';
import styles from './Forms.module.scss';
import About from './Steps/About';
import Interests from './Steps/Interests';


const Forms = () => {
  const [formStep, setFormStep] = useState(1);

  return (
    <section className={`${styles.container} ${global.container}`}>
      <ul className={styles.tabs}>
        <li className={(formStep === 1) ? styles.current_step : ''}>Step 1</li>
        <li className={(formStep === 2) ? styles.current_step : ''}>Step 2</li>
      </ul>
      <div className={styles.forms}>
        {formStep === 1 ? (
          <About setFormStep={setFormStep} />
        ) : (
          <Interests setFormStep={setFormStep} />
        )}
      </div>
    </section>
  )
  
}

export default Forms