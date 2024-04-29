import { ObjectId } from 'mongodb';
import { getTemportalContext } from '#dals/temporal/temporal.context.js';

export const run = async () => {
  await getTemportalContext().insertOne({
    _id: new ObjectId(),
    name: 'Temporal from Mongo',
  });
};
