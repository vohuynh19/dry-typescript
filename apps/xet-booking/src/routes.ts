import { makeRoute } from '@dry-typescript/util-helpers';

export const Routes = {
  splash: makeRoute(() => `/`),
  chooseTime: makeRoute(() => `/choose-time`),
  fillDetail: makeRoute(() => `/fill-detail`),
  decoration: makeRoute(() => `/decoration`),
  deposit: makeRoute(() => `/deposit`),
};
