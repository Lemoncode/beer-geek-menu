import React from 'react';
import styles from '../styles.module.scss';

export function ExampleBeerGridLayout({ temporals }) {
  return (
    <div className={styles.grid_example_block}>
      <p className="txt-title txt-title--bold mb-md mx-md">Beer catalog grid layout</p>
      <ul className="beers-grid-layout">
        <li className="grid-item" key={'example01'}>
          <div className="beer-img-container">
            <img src="/beer-default-img.png" alt="" />
          </div>
          <div className="beer-name-and-price">
            <h2>Beer Name</h2>
            <p className="txt-title txt-title--bold">##€</p>
          </div>
          <p className="txt-lg">
            Beer description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia eligendi praesentium
            et sunt omnis inventore.
          </p>
        </li>
        {temporals.map(temporal => (
          <li className="grid-item" key={temporal.id}>
            {temporal.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
