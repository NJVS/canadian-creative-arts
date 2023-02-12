import global from '../../assets/styles/globalstyles.module.scss';
import styles from './Footer.module.scss';
import { ReactComponent as FooterBackground } from '../../assets/illustrations/footer-background.svg';
import { ReactComponent as FacebookLogo } from '../../assets/logos/facebook-f.svg';
import { ReactComponent as InstagramLogo } from '../../assets/logos/instagram.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterBackground className={styles.footer_background} />
      <ul>
        <li>&#169; All Rights Reserved</li>
        <li>
          <ul>
            <li><a href="www.facebook.com"><FacebookLogo className={styles.facebook} /></a></li>
            <li><a href="www.instagram.com"><InstagramLogo className={styles.instagram} /></a></li>
          </ul>
          Privacy Policy
        </li>
      </ul>
    </footer>
  )
}

export default Footer