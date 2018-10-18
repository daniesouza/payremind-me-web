export const environment = {
  production: true,
  apiUrl: 'https://payremind-me-api.herokuapp.com',

  tokenWhitelistedDomains: [ new RegExp('payremind-me-api.herokuapp.com') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token/') ]

  // tokenWhitelistedDomains: [ 'payremind-me-api.herokuapp.com' ],
  // tokenBlacklistedRoutes: [ 'payremind-me-api.herokuapp.com/oauth/token/' ]
};
