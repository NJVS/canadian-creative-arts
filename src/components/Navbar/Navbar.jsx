import { useContext } from "react";
import { FormDataContext } from "../../context/FormDataContext";
import { Link, NavLink } from "react-router-dom";
import Logo from '../../assets/logos/cca-logo.png';

import global from '../../assets/styles/globalstyles.module.scss';
import styles from './Navbar.module.scss';

const Navbar = ({ solidBackground }) => {
  const { registerAgain } = useContext(FormDataContext);

  return (
    <nav className={`${styles.container} ${(solidBackground) ? styles.solid : '' } ${global.container}`}>
      <div className={global.container}>
        <Link to='/'>
          <img src={Logo} alt="canadian createive arts logo" />
        </Link>
        <ul>
          <li><NavLink to='/events' className={styles.nav_link}>Events</NavLink></li>
          <li><NavLink to='/seminars' className={styles.nav_link}>Seminars</NavLink></li>
          <li><NavLink to='/exhibitor' className={styles.nav_link}>Exhibitors</NavLink></li>
          <li><NavLink to='/faq' className={styles.nav_link}>Faq</NavLink></li>
          <li><NavLink to='/signup' className={`${global.btn}  ${global.btn_sm}`} onClick={() => registerAgain() }>Register</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar