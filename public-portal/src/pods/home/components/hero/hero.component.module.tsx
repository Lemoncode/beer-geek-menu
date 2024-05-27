import styles from './hero.styles.module.scss';

export const HeroComponent: React.FC = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.hero_container}>
        <img src="/iso_logo.svg" alt="Logo de Beer Geek Menú" />
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>
            <span className={styles.hero_firt_letters}>B</span>EER <span className={styles.hero_firt_letters}>G</span>
            EEK <span className={styles.hero_firt_letters}>M</span>ENÚ
          </h1>
          <h2 className={styles.hero_subtitle}>La carta perfecta para tu cervecería</h2>
        </div>
      </div>
    </header>
  );
};
