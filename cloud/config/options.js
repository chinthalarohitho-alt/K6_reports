export const thresholdsSettings = {
//   http_req_failed: [{ threshold: 'rate<0.01', abortOnFail: true }],
  http_req_duration: ['p(99)<1000'],
};

export const workload = {
  executor: 'ramping-vus',
  stages: [
    { duration: '20s', target: 10 },
    { duration: '10s', target: 10 },
    { duration: '20s', target: 0 },
  ],
};
