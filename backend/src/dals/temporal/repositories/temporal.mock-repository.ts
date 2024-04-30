import { TemporalRepository } from './temporal.contract.js';
import { mockDB } from '#dals/mock-data.js';

export const mockRepository: TemporalRepository = {
  getList: async () => {
    return mockDB.temporals;
  },
};
