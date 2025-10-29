import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.text}>
          © {currentYear} | Term Project in <span className={styles.course}>Machine Learning (CSBM 611)</span>  -   
          Developed by <span className={styles.authors}>Uddipta Deka</span> & <span className={styles.authors}>Hirakjyoti Talukdar</span> <br />
          Under the guidance of <span className={styles.teacher}>Dr. Gautam Kumar</span>, <span className={styles.institute}>NIT Delhi</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
