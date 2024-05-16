import React from 'react';
import clsx from 'clsx';
import styles from '../styles.module.scss';

export function ExampleStandardUiTexts() {
  return (
    <div className={clsx(styles.example_block, 'bg-primary-lighter')}>
      <p className="txt-title txt-title--bold mb-md">Standard UI texts</p>
      <p className="txt-title txt-title--bold mb-md">.txt-title .txt-title--bold</p>
      <p className="txt-large mb-md">.txt-large</p>
      <p className="txt-common mb-md">.txt-common (default size)</p>
      <p className="txt-detail mb-md">.txt-detail</p>
    </div>
  );
}
