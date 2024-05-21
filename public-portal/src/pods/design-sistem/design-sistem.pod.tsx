import clsx from 'clsx';
import {
  ExampleBeerGridLayout,
  ExampleButtonsAndTexts,
  ExampleGrid,
  ExampleNav,
  ExampleStandardHeadings,
  ExampleStandardUiTexts,
} from './example-components';
import styles from './styles.module.scss';

export const DesignSistemPod = () => {
  return (
    <>
      <ExampleNav />
      <section className={clsx(styles.container, styles.flex_container)}>
        <h1 className="hero-txt mx-md">Examples with global styles</h1>
        <ExampleGrid />
        <ExampleStandardHeadings />
        <ExampleStandardUiTexts />
        <ExampleButtonsAndTexts />
        <ExampleBeerGridLayout />
        <h2 className={styles.custom}>Examples custom styles using mixins</h2>
      </section>
    </>
  );
};
