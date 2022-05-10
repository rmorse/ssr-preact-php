// Setup prerender middleware
const prerenderMiddleware = require('prerender-node').set('prerenderServiceUrl','http://localhost:3000/')

export default prerenderMiddleware;