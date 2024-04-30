import { dbServer } from '#core/servers/index.js';
import { Temporal } from './temporal.model.js';

export const getTemportalContext = () => dbServer.db?.collection<Temporal>('temporals');
