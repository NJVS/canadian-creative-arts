import { Link } from 'react-router-dom';
import FeaturedEvent from "../../components/FeaturedEvent/FeaturedEvent";

import global from '../../assets/styles/globalstyles.module.scss';
import styles from './Home.module.scss';

import { ReactComponent as HeroBorder } from '../../assets/illustrations/hero-border-1.svg';

const Home = () => {
  return (
    <>
      <section className={styles.hero_container}>
        <div className={global.container}>
          <div className={styles.hero_inner}>
            <h1>Canadian Creative Arts Education Virtual Fair</h1>
            <p>
              Your opportunity to speak directly with over 20 Universities and Colleges from Canada
              specialized in creative arts.
            </p>
            <p>
              Explore a career in Interactive (Mobile, Web Design, Multimedia); Audiovisual (Animation,
              Film, Video, Audio), Digital Marketing, Virtual Reality, Art, Video Games, and much more.
            </p>
            <Link to="/signup" className={`${global.btn} ${global.btn_lg}`}>Register to Attend</Link>
          </div>
        </div>
        <HeroBorder />
      </section>
      <FeaturedEvent />
    </>

    // <main className={styles.container}>
    //   <div className={`${styles.inner_container} ${global.container}`}>
    //     <section className={styles.hero}>
    //       <h1>Canadian Creative Arts Education Virtual Fair</h1>
    //       <p>
    //         Your opportunity to speak directly with over 20 Universities and Colleges from Canada
    //         specialized in creative arts.
    //       </p>
    //       <p>
    //         Explore a career in Interactive (Mobile, Web Design, Multimedia); Audiovisual (Animation,
    //         Film, Video, Audio), Digital Marketing, Virtual Reality, Art, Video Games, and much more.
    //       </p>
    //       <Link to="/signup" className={`${global.btn} ${global.btn_lg}`}>Register to Attend</Link>
    //     </section>
    //     <FeaturedEvent />
    //   </div>
    // </main>
  )
}

export default Home