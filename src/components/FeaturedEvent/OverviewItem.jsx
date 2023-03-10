import styles from './OverviewItem.module.scss';

const OverviewItem = ({ icon, title, desc }) => {
  return (
    <li className={styles.overview_item}>
      <h4>
        {icon}
        {title}
      </h4>
      <p>{desc}</p>
    </li>
  );
}

export default OverviewItem