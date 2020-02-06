import { Api } from 'commons';
import { getFn } from './base';

export const demo = params => {
  return getFn(Api.DASHBOARD, params);
};
