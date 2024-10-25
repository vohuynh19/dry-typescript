import { makeRoute } from '@dry-typescript/util-helpers';

export const Routes = {
  splash: makeRoute(() => `/`),
  chooseTime: makeRoute(() => `/choose-time`),
  fillDetail: makeRoute(() => `/fill-detail`),
  preparation: makeRoute(() => `/preparation`),
  deposit: makeRoute(() => `/deposit`),
};
