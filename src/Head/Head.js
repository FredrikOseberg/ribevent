/** @format */

import styles from './Head.module.css';

import imageOne from '../assets/img1.jpg';
import imageTwo from '../assets/img2.jpg';
import imageThree from '../assets/img3.jpg';
import InfoCard from '../InfoCard/InfoCard';

const Head = () => {
  return (
    <div className={styles.cover}>
      <div className='container'>
        <div className={styles.header}>
          <div className={styles.headerContainer}>
            <h1 className={styles.logo}>RIBEVENT</h1>
          </div>
        </div>

        <div className={styles.headerContent}>
          <div className={styles.textContainer}>
            <h2>Unike turer</h2>
            <p>
              Opplev Oslofjorden på en unik måte i en rask båt med en
              lokalkjent skipper som loser dere gjennom farvann og
              historier på en måte som trollbinder alt fra utdrikningslag
              til firmagrupper.
            </p>
            <a href='mailto:andreas@ribevent.no' className={styles.book}>
              Book nå
            </a>

            <span className={styles.covidInfo}>
              <strong>COVID 19:</strong> Alle turer som bookes kan fritt
              avlyses av begge parter uten kostnad dersom det av hensyn til
              covid-19 er behov for det.{' '}
            </span>
          </div>

          <div className={styles.imageContainer}>
            <img src={imageOne} className={styles.imageOne} alt='boat' />
            <img src={imageTwo} className={styles.imageTwo} alt=' seal' />
            <img
              src={imageThree}
              className={styles.imageThree}
              alt='iboat 2'
            />
          </div>
        </div>

        <div className={styles.bottomHeaderSection}>
          <InfoCard
            title='Hygge på sjøen'
            text='En opplevelse med RIB betyr fart og spenning, men ikke minst
              mye hygge og tid til å dele opplevelsen med gruppen. Vi
              bryter opp den spennende kjøringen med koselige distanser
              gjennom trange sund med holmer, skjær og dyreliv på alle
              kanter.'
          />

          <InfoCard
            title='For all aldre'
            text='RIB er en aktivitet som passer for alle aldre. Vi tilpasser alltid kjøringen etter gruppen og værforhold. Vi er eksperter på å levere trygghetsfølelse i kombinasjon med action. '
          />

          <InfoCard
            title='Tilpasset tid og budsjett'
            text='Hver tur tilpasses tidsplan og budsjett for din gruppe.
              Ønsker dere en kombinasjon av et lengre stopp med måltid og
              drikke underveis har vi mange gode forslag. Det er anledning
              til å ta bilder og video underveis så dere kan nyte de gode
              minnene lenger.'
          />

          <InfoCard
            title='Sikkerhet'
            text='En tur med oss garanterer en skipper med lang erfaring, alle
              nødvendige sertifikater og en sikkerhetsstandard som er
              høyere enn dagens krav. Vi har passasjerforsikring for alle
              våre kunder. I tillegg har vi stort fokus på alle turer at
              hver enkelt gjest skal føle seg sett og føle seg trygg.'
          />
        </div>

        <p
          style={{ color: '#fff', fontWeight: 'bold', marginTop: '2rem' }}
        >
          Kontakt: +47 477 02 860 - andreas@ribevent.no
        </p>
      </div>
    </div>
  );
};

export default Head;
