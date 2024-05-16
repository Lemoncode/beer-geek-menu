import React from 'react';
import styles from '../styles.module.scss';

export function ExampleNav() {
  return (
    <nav className="bg-contrast">
      <div className={styles.nav__title}>
        <img className={styles.nav__title__logo} src="/iso_logo.svg" height="40em" />
        <h2>Beer Geek Menú</h2>
      </div>
    </nav>
  );
}
