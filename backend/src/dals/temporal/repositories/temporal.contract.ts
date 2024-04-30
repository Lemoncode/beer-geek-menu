import { Temporal } from '../temporal.model.js';

export interface TemporalRepository {
  getList(): Promise<Temporal[]>;
}
