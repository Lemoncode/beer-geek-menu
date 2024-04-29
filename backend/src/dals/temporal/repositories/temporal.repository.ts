import { TemporalRepository } from './temporal.contract.js';
import { getTemportalContext } from '../temporal.context.js';

export const dbRepository: TemporalRepository = {
  getList: async () => {
    return await getTemportalContext().find().toArray();
  },
};
