import { ENV } from '#core/constants/index.js';
import { mockRepository } from './temporal.mock-repository.js';
import { dbRepository } from './temporal.repository.js';

export const temporalRepository = ENV.IS_MOCK_API ? mockRepository : dbRepository;
