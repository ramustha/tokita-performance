import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
  scenarios: {
    auth: {
      executor: 'ramping-vus',
      exec: 'auth',
      startVUs: 0,
      stages: [
        { duration: '20s', target: '20'},
        { duration: '50s', target: '20'},
      ]
    }
  }
};

export function auth() {
  console.log('perform auth scenario')
  http.get('https://test.k6.io');
  sleep(1);
}
