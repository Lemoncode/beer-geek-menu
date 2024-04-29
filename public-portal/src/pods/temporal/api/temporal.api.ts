import { API_URLS } from '#core/constants';

export const getTemporalList = async (options?: RequestInit): Promise<any[]> =>
  fetch(API_URLS.TEMPORALS, options).then(response => response.json());
