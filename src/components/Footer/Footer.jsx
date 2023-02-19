import global from '../../assets/styles/globalstyles.module.scss';
import styles from './Footer.module.scss';
import { ReactComponent as FooterBackground } from '../../assets/illustrations/footer-background.svg';
import { ReactComponent as FacebookLogo } from '../../assets/logos/facebook-f.svg';
import { ReactComponent as InstagramLogo } from '../../assets/logos/instagram.svg';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <FooterBackground className={styles.footer_background} />
      <div className={global.container}>
        <p>&#169; All Rights Reserved</p>
        <div>
          <ul>
            <li><a href="www.facebook.com"><FacebookLogo className={styles.facebook} /></a></li>
            <li><a href="www.instagram.com"><InstagramLogo className={styles.instagram} /></a></li>
          </ul>
          Privacy Policy
        </div>
      </div>
    </footer>
  )
}

export default Footer