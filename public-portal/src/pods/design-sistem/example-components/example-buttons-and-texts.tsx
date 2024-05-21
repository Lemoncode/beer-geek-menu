import React from 'react';
import clsx from 'clsx';
import styles from '../styles.module.scss';

export function ExampleButtonsAndTexts() {
  return (
    <div className={clsx(styles.example_block, 'bg-primary-lighter')}>
      <p className="txt-title txt-title--bold mb-md">Buttons and Links</p>
      <div className={styles.link_btn_container}>
        <button className="btn-primary">.btn-primary</button>
      </div>
      <div className={styles.link_btn_container}>
        <button className="btn-secondary">.btn-secondary</button>
      </div>
      <div className={styles.link_btn_container}>
        <button className="btn-accent">.btn-accentt</button>
      </div>
      <div className={styles.link_btn_container}>
        <button className="btn--large">.btn--large</button>
      </div>
      <div className={styles.link_btn_container}>
        <button className="btn--small">.btn--small</button>
      </div>
      <div className={styles.example_block}>
        <div className={styles.link_btn_container}>
          <a href="#">.link-info</a>
        </div>
        <div className={clsx(styles.link_btn_container, 'bg-contrast', 'py-xs')}>
          <a className="link--accent" href="#">
            .link--accent (use only over dark bg)
          </a>
        </div>
        <div className={styles.link_btn_container}>
          <a className="link--secondary" href="#">
            .link--secondary
          </a>
        </div>
      </div>
    </div>
  );
}
