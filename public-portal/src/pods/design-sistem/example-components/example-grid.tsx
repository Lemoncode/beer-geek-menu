import React from 'react';
import clsx from 'clsx';
import styles from '../styles.module.scss';

export function ExampleGrid() {
  return (
    <div className={clsx(styles.example_block, 'bg-primary-lighter')}>
      <p className="txt-title txt-title--bold">Mobile Grid:</p>
      <div className="block-mob txt-detail">
        <div className="block-mob__item bg-contrast">.block-mob__item</div>
        <div className="block-mob__item--2col bg-contrast">.block-mob__item--2col</div>
        <div className="block-mob__item--2col bg-contrast">.block-mob__item--2col</div>
        <div className="block-mob__item--3col bg-contrast">.block-mob__item--3col</div>
        <div className="block-mob__item--3col bg-contrast">.block-mob__item--3col</div>
        <div className="block-mob__item--3col bg-contrast">.block-mob__item--3col</div>
        <div className="block-mob__item--4col bg-contrast">.block-mob__item--4col</div>
        <div className="block-mob__item--4col bg-contrast">.block-mob__item--4col</div>
        <div className="block-mob__item--4col bg-contrast">.block-mob__item--4col</div>
        <div className="block-mob__item--4col bg-contrast">.block-mob__item--4col</div>
        <div className="block-mob__item--4col bg-contrast">.block-mob__item--4col</div>
        <div className="block-mob__item--2col bg-contrast">.block-mob__item--2col</div>
        <div className="block-mob__item--4col bg-contrast">.block-mob__item--4col</div>
      </div>
    </div>
  );
}
