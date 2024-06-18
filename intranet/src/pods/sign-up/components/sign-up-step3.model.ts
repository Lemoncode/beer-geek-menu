import { Beer } from '#core/model/index.js';

export interface selectedBeer extends Beer {
  isSelected: boolean;
}
