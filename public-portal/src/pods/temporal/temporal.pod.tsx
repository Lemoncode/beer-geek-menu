import React from 'react';
import clsx from 'clsx';

import * as api from './api';
import styles from './styles.module.scss';

import { ExampleNav } from './example-components/example-nav';
import { ExampleGrid } from './example-components/example-grid';
import { ExampleStandardHeadings } from './example-components/example-standard-headings';
import { ExampleStandardUiTexts } from './example-components/example-standard-ui-texts';
import { ExampleButtonsAndTexts } from './example-components/example-buttons-and-texts';
import { ExampleBeerGridLayout } from './example-components/example-beer-grid-layout';

export const TemporalPod = async () => {
  const temporals = await api.getTemporalList();

  return (
    <>
      <ExampleNav />

      <section className={clsx(styles.container, styles.flex_container)}>
        <h1 className="txt-hero mx-md">Examples with global styles</h1>

        <ExampleGrid />
        <ExampleStandardHeadings />
        <ExampleStandardUiTexts />
        <ExampleButtonsAndTexts />
        <ExampleBeerGridLayout temporals={temporals} />
      </section>
    </>
  );
};
