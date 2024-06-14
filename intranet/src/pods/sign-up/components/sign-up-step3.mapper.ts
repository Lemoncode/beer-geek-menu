import { Beer } from '#core/model/index.js';
import { selectedBeer } from './sign-up-step3.model';

export const mapBeerToSelectedBeerModel = (beers: Beer[]): selectedBeer[] => {
  return beers.map(beer => ({
    ...beer,
    isSelected: false,
  }));
};

export const mapSelectedBeerToBeerModel = (beers: selectedBeer[]): Beer[] => {
  return beers.map(({ isSelected, ...rest }) => rest);
};
