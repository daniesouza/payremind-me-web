export const environment = {
  production: true,
  apiUrl: 'https://payremind-me-api.herokuapp.com',

  tokenWhitelistedDomains: ['https://payremind-me-api.herokuapp.com' ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
};
