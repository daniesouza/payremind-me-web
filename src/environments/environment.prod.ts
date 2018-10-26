export const environment = {
  production: true,
  apiUrl: 'http://ec2-18-231-91-14.sa-east-1.compute.amazonaws.com:8080',
  whitelistedDomains: ['ec2-18-231-91-14.sa-east-1.compute.amazonaws.com:8080' ],
  blacklistedRoutes: [ 'http://ec2-18-231-91-14.sa-east-1.compute.amazonaws.com:8080/oauth/token' ]
};

// export const environment = {
//   production: true,
//   apiUrl: 'https://payremind-me-api.herokuapp.com',
//   whitelistedDomains: ['payremind-me-api.herokuapp.com'],
//   blacklistedRoutes: ['https://payremind-me-api.herokuapp.com/oauth/token']
// };
//
