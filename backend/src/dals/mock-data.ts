import { ObjectId } from 'mongodb';
import { Temporal } from './temporal/index.js';

export interface MockDB {
  temporals: Temporal[];
}

export const mockDB: MockDB = {
  temporals: [
    { _id: new ObjectId(), name: 'Temporal 1' },
    { _id: new ObjectId(), name: 'Temporal 2' },
  ],
};
