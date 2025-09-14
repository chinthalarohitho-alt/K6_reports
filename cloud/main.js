import { login } from './scenarios/Login.js';
import { users } from './utils/data-loader.js';
import { thresholdsSettings, workload } from './config/options.js';

export const options = {
  scenarios: { default: workload },
  thresholds: thresholdsSettings,
};

const baseUrl = 'https://test.k6.io';

export default function () {
  const user = users[Math.floor(Math.random() * users.length)];
  login(baseUrl, user);
}
