import { Link } from 'react-router-dom';
import OverviewItem from './OverviewItem';
import { details, overview } from '../../data/featuredEvent';

import global from '../../assets/styles/globalstyles.module.scss';
import styles from './FeaturedEvent.module.scss';

const FeaturedEvent = () => {
  return (
    <section className={styles.featured_event}>
      <article className={styles.event_details}>
        <div>
          <h2>{details.address.country} <span>{details.date}</span></h2>
          <p><strong>{details.time}</strong></p>
        </div>
        <hr />
        <div>
          <p><strong>{details.address.district} {details.address.country}</strong></p>
          <p>{details.address.street}</p>
        </div>
      </article>
      <article className={styles.event_overview}>
        <h3>Invest in your career. Find your perfect course.</h3>
        <ul>
          {overview.map(data => (
            <OverviewItem key={data.id} icon={data.icon} title={data.title} desc={data.desc} />
          ))}
        </ul>
      </article>
      <Link to="/events" className={`${global.btn} ${global.btn_f_lg}`}>Click to change city Abu Dhabi</Link>
    </section>
  )
}

export default FeaturedEvent