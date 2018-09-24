const build = 14;
const appVersion = '1.0.0';

const configs = {
  development: {
    API_ROOT: 'http://192.168.1.102:8080',
  },
  production: {
    API_ROOT: 'http://vxp-api-v1.gp-analytics.com',
  },
  TRACKING_ID: 'UA-111707281-2',
  appVersion,
};

export default {
  build,
  appVersion,
  ...configs[(__DEV__ ? 'development' : 'production')],
};
