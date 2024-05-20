import React from 'react';
import clsx from 'clsx';
import styles from '../styles.module.scss';

export function ExampleStandardHeadings() {
  return (
    <div className={clsx(styles.example_block, 'bg-primary-lighter')}>
      <p className="txt-title txt-title--bold mb-md">Standard Headings:</p>
      <h1 className="hero-txt mb-md">Hero text</h1>
      <h1 className="mb-md">Global/standard H1</h1>
      <h2 className="mb-md">Global/standard H2</h2>
      <h3 className="mb-md">Global/standard H3</h3>
      <h4 className="mb-md">Global/standard H4</h4>
      <h4 className="txt--primary mb-md">.txt--primary (default)</h4>
      <h4 className="txt--secondary mb-md">.txt--secondary</h4>
      <h4 className="bg-contrast txt--accent mb-md py-sm px-sm">
        .txt--accent <p className="txt-detail">(use only over dark colors)</p>
      </h4>
      <h4 className="txt--contrast bg-contrast mb-md py-sm px-sm">
        .txt--contrast <p className="txt-detail">(use only over dark colors)</p>
      </h4>
    </div>
  );
}
