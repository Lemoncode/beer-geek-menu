import { Router } from 'express';
import { temporalRepository } from '#dals/temporal/index.js';

export const temporalAPI = Router();

temporalAPI.get('/', async (req, res) => {
  res.send(await temporalRepository.getList());
});
