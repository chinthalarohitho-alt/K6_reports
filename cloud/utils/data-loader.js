import { SharedArray } from 'k6/data';

export const users = new SharedArray('user data', () =>
  JSON.parse(open('../data/users.json'))
);
