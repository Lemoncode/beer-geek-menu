import express from 'express';

export const createRestApiServer = () => {
  const restApiServer = express();
  restApiServer.use(express.json());

  return restApiServer;
};
