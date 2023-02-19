import React from 'react'
import global from '../../assets/styles/globalstyles.module.scss';
import styles from './Thankyou.module.scss';
import { ReactComponent as CheckIcon } from '../../assets/icons/circle-check-regular.svg';
import { ReactComponent as HeroBorder } from '../../assets/illustrations/hero-border-1.svg';


const Thankyou = () => {
  return (
    <>
      <section className={styles.hero}>
        <HeroBorder />
      </section>
      <section className={styles.container}>
        <CheckIcon />
        <h2>Thankyou</h2>
        <p>
          We're excited to have you as part of our community. If you have any
          questions or concerns, please do not hesitate to contact us. Our team is always here to support
          you and to help you make the most of your experience with us.
        </p>
      </section>
    </>
  )
}

export default Thankyou