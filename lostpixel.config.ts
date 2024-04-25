import { CustomProjectConfig } from 'lost-pixel';

export const config: CustomProjectConfig = {
  pageShots: {
    pages: [{ path: '/', name: 'home' }],

    baseUrl: 'http://172.17.0.1:3000',
  },
  // OSS mode
  generateOnly: true,
  failOnDifference: false,
};
