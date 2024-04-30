import { API_URLS } from '#core/constants';

export const getTemporalList = async (): Promise<any[]> => fetch(API_URLS.TEMPORALS).then(response => response.json());
