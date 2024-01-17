import styles from "./footer.module.css"

const Footer = () => {
  return (
      <div className={styles.container}>
        <div className={styles.logo}>Yanyu</div>
        <div className={styles.text}>Yanyu copyrights All rights reserved.</div>
      </div>
  );
};

export default Footer;
