import { CustomProjectConfig } from 'lost-pixel';

export const config: CustomProjectConfig = {
  // @ts-ignore
  pageShots: {
    pagesJsonUrl: 'http://172.17.0.1:3000/lost-pixel.json',
    baseUrl: 'http://172.17.0.1:3000',
  },

  shotConcurrency: 15,

  generateOnly: true,
  failOnDifference: false,
};
