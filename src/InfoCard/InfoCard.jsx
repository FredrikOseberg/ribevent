import styles from './InfoCard.module.css';

const InfoCard = ({ title, text }) => {
  return (
    <div className={styles.infoCard}>
      <h2 className={styles.title}>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default InfoCard;
