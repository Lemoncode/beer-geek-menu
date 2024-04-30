import { MongoClient, Db } from 'mongodb';

let client: MongoClient;

const connect = async (connectionURI: string) => {
  client = new MongoClient(connectionURI);
  await client.connect();
  dbServer.db = client.db();
};

const disconnect = async () => {
  await client.close();
};

export let dbServer = {
  connect,
  disconnect,
  db: undefined as Db,
};
